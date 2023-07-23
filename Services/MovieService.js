const axios = require("axios").default;
import {
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  API_KEY,
  ENDPOINTS,
  YOUTUBE_BASE_URL,
} from "./APIs";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
//has to work on the movie details API after I come back

//time to get to work
const getNowPlayingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);
const getUpComingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

const getMovieID = (movieID, append_to_response = "") =>
  TMDB_HTTP_REQUEST.get(
    `${ENDPOINTS.MOVIE}/${movieID}`,
    append_to_response ? { params: { append_to_response } } : null
  );

  const getVideo = (key) => `${YOUTUBE_BASE_URL}?v=${key}`;

const getGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);
const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

export {
  getMovieID,
  getNowPlayingMovies,
  getUpComingMovies,
  getPoster,
  getGenres,
  getVideo,
};
