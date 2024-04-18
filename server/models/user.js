const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imdb_id: {
    type: String,
    required: true,
  },
  saved: {
    type: Boolean,
  },
  banned: {
    type: Boolean,
  },
  movie_poster: {
    type: String,
  },
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  services: {
    type: [String],
  },
  saved_movies: [movieSchema],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
