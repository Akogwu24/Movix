import React, { useEffect, useState } from 'react';
import FullPageLoader from '../../../components/FullPageLoader';
import { getNewArrivals } from '../service';
import { MovieSection } from './MovieSection';

export const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewArrivals(setNewArrivals, setLoading);
  }, []);

  return <MovieSection data={newArrivals} category={'New Arrival'} />;
};
