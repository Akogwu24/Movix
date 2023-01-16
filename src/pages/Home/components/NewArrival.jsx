import React, { useEffect, useState } from 'react';
import { getNewArrivals } from '../service';
import { MovieSection } from './MovieSection';

export const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    getNewArrivals(setNewArrivals);
  }, []);

  return <MovieSection data={newArrivals} category={'New Arrival'} />;
};
