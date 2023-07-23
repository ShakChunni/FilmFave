const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const GENRES = "https://api.themoviedb.org/3/genre/movie/list";
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const API_KEY = "cc76c5c345fe442173a4290e48edd347";

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  GENRES: "/genre/movie/list",
  MOVIE: "/movie",
};

const APPEND_TO_RESPONSE = {
  VIDEOS: "videos",
};

export {
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  GENRES,
  API_KEY,
  ENDPOINTS,
  APPEND_TO_RESPONSE,
  YOUTUBE_BASE_URL,
};
