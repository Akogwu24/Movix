import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MovieCard } from './MovieCard';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { MovieSection } from './MovieSection';

export const FetauredMovie = () => {
  return <MovieSection category={'Featured Movie'} />;
};
