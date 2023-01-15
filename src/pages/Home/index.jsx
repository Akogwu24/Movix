import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../../components/common/Footer';
import { ExclusiveVideos } from './components/ExclusiveVideos';
import { FeaturedCasts } from './components/FeaturedCasts';
import { FetauredMovie } from './components/FetauredMovie';
import { NewArrival } from './components/NewArrival';
import { PosterSection } from './components/PosterSection';

export const Home = () => {
  return (
    <Stack as='main' color='#fff' pos='relative' top='-5px'>
      <PosterSection />
      <FetauredMovie />
      <NewArrival />
      <ExclusiveVideos />
      <FeaturedCasts />
      <Footer />
    </Stack>
  );
};
