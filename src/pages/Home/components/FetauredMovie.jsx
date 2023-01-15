import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { MovieSection } from './MovieSection';
import { getFeaturedMovies } from '../service';

export const FetauredMovie = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    getFeaturedMovies(setFeaturedMovies, setLoading);
  }, []);
  //add sekeleton loader
  return <MovieSection data={featuredMovies} isPlaying={false} category={'Featured Movie'} />;
};
