const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
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
    saveBook: async (parent, { username, savedBook }) => {
      return User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: { savedBooks: savedBook },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    deleteBook: async (parent, { username, savedBook }) => {
      return User.findOneAndUpdate(
        { username: username },
        { $pull: { savedBooks: savedBook } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
