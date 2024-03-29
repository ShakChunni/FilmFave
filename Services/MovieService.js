const axios = require("axios").default;
import {
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  API_KEY,
  ENDPOINTS,
  youtubeURL,
  SEARCH_MOVIES,
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

const getMovieID = (movieID, append_to_response = "") => {
  const url = `${ENDPOINTS.MOVIE}/${movieID}`;
  console.log(
    "API URL:",
    append_to_response ? `${url}?append_to_response=${append_to_response}` : url
  );
  return TMDB_HTTP_REQUEST.get(
    url,
    append_to_response ? { params: { append_to_response } } : null
  );
};
const getVideo = (key) => `${youtubeURL}?v=${key}`;
const getGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);
const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const searchMovies = (query) =>
  TMDB_HTTP_REQUEST.get(SEARCH_MOVIES, { params: { query } });

const getNowPlayingTVShows = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.ON_THE_AIR_TV);
const getTVGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.TV_GENRES);

export {
  getMovieID,
  getNowPlayingMovies,
  getUpComingMovies,
  getPoster,
  getGenres,
  getVideo,
  getNowPlayingTVShows,
  getTVGenres,
  searchMovies,
};
