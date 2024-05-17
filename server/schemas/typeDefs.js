const typeDefs = `
type Movie {
  _id: ID!
  title: String!
  imdb_id: String!
  saved: Boolean
  banned: Boolean
  movie_poster: String
}

type Service {
  id: String!
  title: String!
}

type User {
  _id: ID!
  email: String!
  password: String!
  services: [Service] 
  saved_movies: [Movie]
}

type Auth {
  token: ID!
  user: User
}


type MovieResult {
  title: String
  overview: String
  imdbId: String
}

type Query {
  users: [User]
  user(email: String!): User
  movies: [Movie]
  movie(imdb_id: String!): Movie
  getMovieList(services: [String!], genres:[String!]):MovieResult
}

input ServiceInput {
  id: String!
  title: String!
}

type Mutation {
  addUser(email: String!, password: String!, services:[ServiceInput]): Auth
  login(email: String!, password: String!): Auth
  addMovie(title: String!, imdb_id: String!, saved: Boolean, banned: Boolean, movie_poster: String): Movie
  updateMovie(imdb_id: String!, saved: Boolean, banned: Boolean): Movie
  deleteMovie(imdb_id: String!): Movie
}`;

module.exports = typeDefs;
