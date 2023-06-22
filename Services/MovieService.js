const axios = require("axios").default;
import { ENDPOINTS } from "../components/URLs";
const API_KEY = "ee6fc7fb22613cba152867207a9587df";
const TMDB_HTTP_REQUEST = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

const getNowPlayingMovies = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.NOWPLAYING);
const getPoster = (path) => `${IMAGE_BASE_URL}/original${path}`;

export default { getNowPlayingMovies, getPoster };
