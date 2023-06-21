import axios from 'axios';

const API_KEY = 'ee6fc7fb22613cba152867207a9587df';

export const fetchMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
