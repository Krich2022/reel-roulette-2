const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("saved_movies");
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate("saved_movies");
    },
    movies: async () => {
      return Movie.find();
    },
    movie: async (parent, { imdb_id }) => {
      return Movie.findOne({ imdb_id });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addMovie: async (
      parent,
      { title, imdb_id, saved, banned, movie_poster }
    ) => {
      const movie = await Movie.create({
        title,
        imdb_id,
        saved,
        banned,
        movie_poster,
      });
      return movie;
    },
    updateMovie: async (parent, { imdb_id, saved, banned }) => {
      const updatedMovie = await Movie.findOneAndUpdate(
        { imdb_id },
        { saved, banned },
        { new: true }
      );
      return updatedMovie;
    },
    deleteMovie: async (parent, { imdb_id }) => {
      const deletedMovie = await Movie.findOneAndDelete({ imdb_id });
      return deletedMovie;
    },
  },
};

module.exports = resolvers;
