const { AuthenticationError } = require('apollo-server-express');
const { User, Application, CoverLetter } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('applications').populate({
        path: 'applications',
        populate: 'coverletter'
      });
    },
    user: async (parent, { username }) => {
      return User.findOne({username}).populate('applications').populate({
        path: 'applications',
        populate: 'coverletter'
      });
    },
    applications: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Application.find(params).sort({ createdAt: -1 });
    },
    application: async (parent, { applicationId }) => {
      return Application.findOne({ _id: applicationId });
    },
    coverletter: async (parent, { coverletterId }) => {
      return CoverLetter.findOne({ _id: coverletterId });
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
    addCoverLetter: async (parent, { coverLetterText }, context) => {
      if (context.user) {
        const coverLetter = await CoverLetter.create({
          coverLetterText,
        });

        await Application.findOneAndUpdate(
          { _id: context.application._id },
          { $addToSet: { coverletter: coverLetter._id } }
        );

        return coverLetter;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addApplication: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
