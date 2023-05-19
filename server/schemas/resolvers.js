const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    getSingleUser: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
    saveBook: async (parent, { userId, title }, context) => {
        if (context.user) {
            return User.findOneAndUpdate(
              { _id: userId },
              {
                $addToSet: { savedBooks: { title } },
              },
              {
                new: true,
                runValidators: true,
              }
            );
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    deleteBook: async (parent, { title }, context) => {
        if (context.user) {
            return User.findOneAndUpdate(
              { _id: context.userId },
              { $pull: { savedBooks: { title: title } } },
              { new: true }
            );
        }
        throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;