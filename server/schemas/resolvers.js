const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const API_KEY = process.env.API_KEY;

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
    getMovieList: async (parent, { services, genres }) => {
      const url = `https://streaming-availability.p.rapidapi.com/search/filters?services=${services.join(
        ","
      )}&country=us&output_language=en&order_by=original_title&genres=${genres.join(
        ","
      )}&genres_relation=and&show_type=all`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const result = await response.json();
        if (!result || !result.results) {
          throw new Error(`invalid data receivied from API ${result}`);
        }

        return result;
      } catch (error) {
        console.error(error);
      }
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password, services });
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
