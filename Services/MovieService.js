const axios = require("axios").default;
import { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL, API_KEY, ENDPOINTS } from "./APIs";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const getNowPlayingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);
const getUpComingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);
const getGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);
const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;
export { getNowPlayingMovies, getUpComingMovies, getGenres, getPoster };
