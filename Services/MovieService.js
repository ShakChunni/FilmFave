import { BASE_URL, IMAGE_BASE_URL, API_KEY, ENDPOINTS } from "./URLs";
import axios from "axios";

const axios = require("axios").default;

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const getNowPlayingMovies = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.NOWPLAYING);
const getPoster = (path) => `${IMAGE_BASE_URL}/original${path}`;

export default { getNowPlayingMovies, getPoster };
