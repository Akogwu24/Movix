import React, { useEffect, useState } from 'react';
import { MovieSection } from './MovieSection';
import { getFeaturedMovies } from '../service';

export const FetauredMovie = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  // const [loading, setLoading] = useState([]);

  useEffect(() => {
    getFeaturedMovies(setFeaturedMovies);
  }, []);
  //add sekeleton loader
  return <MovieSection data={featuredMovies} isPlaying={false} category={'Featured Movie'} />;
};
