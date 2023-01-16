import axios from 'axios';
import { api_key, baseURL } from '../../../utils/utils';

// ('https://api.themoviedb.org/3/discover/movie?api_key=d4f78a69c35771ddde0736388598c391&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');

export const getNewArrivals = async (setNewArrivals, setLoading) => {
  setLoading(true);
  try {
    const { data } = await axios.get(`${baseURL}/discover/movie?api_key=${api_key}&sort_by=release_date.desc`);
    // console.log('data', data);
    setNewArrivals(data.results);
  } catch (error) {
    console.log(error.response);
  } finally {
    setLoading(false);
  }
};

export const getFeaturedMovies = async (setFeaturedMovies) => {
  try {
    const { data } = await axios.get(`${baseURL}/movie/popular?api_key=${api_key}&language=en-US&page=1`);

    setFeaturedMovies(data.results);
  } catch (error) {
    console.log(error.response);
  } finally {
  }
};

export const getSingleMovie = async (setMovieData, movieID) => {
  try {
    const { data } = await axios.get(`${baseURL}/movie/${movieID}?api_key=${api_key}&language=en-US`);

    setMovieData(data);
  } catch (error) {
    console.log(error.response);
  } finally {
  }
};

export const searchMovie = async (searchTerm, setSearchedMovie) => {
  try {
    const { data } = await axios.get(`${baseURL}/search/movie?api_key=${api_key}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
    // console.log('sear', data);
    setSearchedMovie(data?.results);
  } catch (error) {
    console.log(error.response);
  }
};

export const getTrendingMovieOfTheDay = async (setTrendingMovieOfTheDay, setLoading) => {
  try {
    const { data } = await axios.get(`${baseURL}/trending/all/day?api_key=${api_key}`);
    setTrendingMovieOfTheDay(data.results);
  } catch (error) {
    console.log(error.response);
  } finally {
    setLoading(false);
  }
};

export const getFeaturedCasts = async (setFeaturedCasts) => {
  try {
    const { data } = await axios.get(`${baseURL}/person/popular?api_key=${api_key}&language=en-US&page=1`);
    setFeaturedCasts(data.results);
  } catch (error) {
    console.log(error.response);
  } finally {
  }
};

export const getMovieWithVideos = async (setMovieWithVideo, moviedID) => {
  try {
    const { data } = await axios.get(`${baseURL}/movie/${moviedID}?api_key=${api_key}&append_to_response=videos`);

    if (data.videos && data.videos.results) {
      const trailer = data?.videos.results.find((vid) => vid.name === 'Official Trailer');
      setMovieWithVideo(trailer ? trailer : data.videos.results[0]);
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const getUpcomingeMovies = async (setUpcomingMovies) => {
  try {
    const { data } = await axios.get(`${baseURL}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);

    setUpcomingMovies(data.results);
  } catch (error) {
    console.log(error);
  }
};
