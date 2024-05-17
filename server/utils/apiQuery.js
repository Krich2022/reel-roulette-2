const genres = {
  adventure: 12,
  fantasy: 14,
  animation: 16,
  drama: 18,
  horror: 27,
  action: 28,
  comedy: 35,
  history: 36,
  western: 37,
  thriller: 53,
  crime: 80,
  documentary: 99,
  sciFi: 878,
  mystery: 9648,
  music: 10402,
  romance: 10749,
  family: 10751,
  war: 10752,
};

let orderBy = [
  "order_by=popularity_alltime",
  "order_by=popularity_1year",
  "order_by=popularity_1month",
  "order_by=popularity_1week",
];
let randomOrder = Math.round(Math.random() * 3);
let descending = Math.round(Math.random());
if (descending === 0) {
  descending = true;
} else {
  descending = false;
}

let apiGenre = {
  results: [
    null,
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ],
};

let lists = {
  results: [
    "most_pop_movies",
    "most_pop_series",
    "top_boxoffice_200",
    "top_boxoffice_last_weekend_10",
    "top_rated_250",
    "top_rated_english_250",
    "top_rated_lowest_100",
    "top_rated_series_250",
    "titles",
  ],
};
