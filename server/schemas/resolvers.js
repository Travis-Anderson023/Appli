const { AuthenticationError } = require('apollo-server-express');
const { User, Application, CoverLetter } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-_password').populate('applications');
    },
    user: async (parent, { username }, context) => {
      return User.findOne({username}).populate('applications');
    },
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
      if (context.user) {
        const application = await Application.create(args);

        await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: { applications: application._id}}
        )
        
        return application

      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateApplication: async (parent, args, context) => {
      if (context.user) {
        const application = await Application.findOneAndUpdate(
          {_id: args.applicationId},
          {$set: {
            company:args.company, 
            contact_name:args.contact_name, 
            contact_email:args.contact_email, 
            contact_phone:args.contact_phone, 
            contact_website:args.contact_website, 
            response:args.response, 
            date_applied:args.date_applied, 
            cover_letter:args.cover_letter
          }},
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
    }
  }
};

module.exports = resolvers;
