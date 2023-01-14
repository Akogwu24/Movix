import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MovieCard } from './MovieCard';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { CategoryHead } from './CategoryHead';

export const MovieSection = ({ category }) => {
  const [movieLength, setmovieLength] = useState(10);
  return (
    <Stack color='black' px={sidePadding} as='section' py='10'>
      <CategoryHead category={category} />
      <Box pos='relative'>
        <CarouselProvider
          infinite={true}
          visibleSlides={4}
          dragEnabled={true}
          isPlaying={true}
          naturalSlideWidth={200}
          naturalSlideHeight={370}
          totalSlides={movieLength}
          // isIntrinsicHeight={true}
        >
          <ButtonBack className='carousel__btn back'>
            <RxCaretLeft />
          </ButtonBack>
          <Slider className='slider'>
            {[...Array(movieLength)].map((movie) => (
              <Slide className='slide' key={nanoid()}>
                <MovieCard key={nanoid()} />
              </Slide>
            ))}
          </Slider>
          <ButtonNext className='carousel__btn forward'>
            <RxCaretRight />
          </ButtonNext>
        </CarouselProvider>
      </Box>
    </Stack>
  );
};
