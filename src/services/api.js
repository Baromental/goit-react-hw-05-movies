import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTM1M2YyYWMwYWI3ZDk4YThlN2E5Y2RjMzVhMjk0YSIsInN1YiI6IjY1ZGY2Y2Q3YTliOWE0MDE0YThlMjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uN2kueWrb_iU8a5pq2oQ8enPNjekCz6SDXHHaVkpRKI'
  }
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day', options);
  return data.results;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data.results;
};

export const fetchMoviesByQuery = async ({ query }) => {
  const { data } = await axios.get(`search/movie`, {
    ...options,
    params: { ...options.params, query },
  });
  return data.results;
};