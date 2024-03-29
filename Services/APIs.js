const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const GENRES = "https://api.themoviedb.org/3/genre/movie/list";
const youtubeURL = "https://www.youtube.com/watch";
const SEARCH_MOVIES = "/search/movie";

const API_KEY = "cc76c5c345fe442173a4290e48edd347";

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  GENRES: "/genre/movie/list",
  MOVIE: "/movie",
  ON_THE_AIR_TV: "/tv/on_the_air",
};

const appendToResponse = {
  VIDEOS: "videos",
  CREDITS: "credits",
};

export {
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  GENRES,
  API_KEY,
  ENDPOINTS,
  appendToResponse,
  youtubeURL,
  SEARCH_MOVIES,
};
