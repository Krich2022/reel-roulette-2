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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ac69e0632mshb00a4ba8e266c71p159332jsn490d9476e71d",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};
let url =
  "https://streaming-availability.p.rapidapi.com/search/filters?services=";

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
