const typeDefs = `
type Movie {
  _id: ID!
  title: String!
  imdb_id: String!
  saved: Boolean
  banned: Boolean
  movie_poster: String
}

type User {
  _id: ID!
  email: String!
  password: String!
  services: [String]
  saved_movies: [Movie]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(email: String!): User
  movies: [Movie]
  movie(imdb_id: String!): Movie
}

type Mutation {
  addUser(email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addMovie(title: String!, imdb_id: String!, saved: Boolean, banned: Boolean, movie_poster: String): Movie
  updateMovie(imdb_id: String!, saved: Boolean, banned: Boolean): Movie
  deleteMovie(imdb_id: String!): Movie
`;

module.exports = typeDefs;
