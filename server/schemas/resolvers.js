const { AuthenticationError } = require('apollo-server-express');
const { User, Application, CoverLetter } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-_password').populate('applications');
    },
    user: async (parent, { username }, context) => {
      console.log(context.user)
      return User.findOne({username}).populate('applications');
    },
    applications: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Application.find(params).populate('coverletter').sort({ createdAt: -1 });
    },
    application: async (parent, { applicationId }) => {
      return Application.findOne({ _id: applicationId }).populate('coverletter');
    },
    // coverletter: async (parent, { coverletterId }) => {
    //   return CoverLetter.findOne({ _id: coverletterId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('resumes').populate('coverletters');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addApplication: async (parent, args, context) => {
      // if (context.user) {
        const application = await Application.create(args);

        // await User.findOneAndUpdate(
        //   {_id: context.user._id},
        //   { $addToSet: { applications: application._id}}
        // )
        
        return application

      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    updateApplication: async (parent, args, context) => {
      if (context.user) {
        const application = await Application.findOneAndUpdate(
          {_id: args.applicationId},
          {$set: args},
          { runValidators: true, new: true }
        );
        
        return application

      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteApplication: async (parent, {applicationId}, context) => {
      if (context.user) {
        const application = await Application.findOneAndRemove({_id: applicationId});

        await User.findOneAndUpdate(
          {_id: context.user._id},
          { $pull: { applications: { _id: application._id } } }
        )

        return User;

      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // updateCoverLetter: async (parent, { coverletterId, text }, context) => {
    //   // if (context.user) {
    //     const coverLetter = await CoverLetter.findOneAndUpdate(
    //       {_id: coverletterId},
    //       { $set: {text:text}},
    //       { runValidators: true, new: true }
    //     );

    //     console.log(text);
    //     console.log(coverLetter);

    //     return coverLetter;
    //   // }
    //   // throw new AuthenticationError('You need to be logged in!');
    // },
  },
  // addCoverLetter: async (parent, { text }, context) => {
    //   if (context.user) {
    //     const coverLetter = await CoverLetter.create({
    //       text,
    //     });

    //     await Application.findOneAndUpdate(
    //       { _id: context.application._id },
    //       { $addToSet: { coverletter: coverLetter._id } }
    //     );

    //     return coverLetter;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
};

module.exports = resolvers;
