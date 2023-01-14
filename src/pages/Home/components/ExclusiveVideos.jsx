import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MovieCard } from './MovieCard';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { CategoryHead } from './CategoryHead';

export const ExclusiveVideos = () => {
  const [movieLength, setmovieLength] = useState(10);
  return (
    <Stack color='black' px={sidePadding} as='section' py='10'>
      <CategoryHead category='Exlusive Video' />
      <Box pos='relative'>
        <CarouselProvider
          infinite={true}
          visibleSlides={2.5}
          dragEnabled={true}
          isPlaying={false}
          //   naturalSlideWidth={200}
          //   naturalSlideHeight={270}
          totalSlides={movieLength}
          isIntrinsicHeight={true}
        >
          <ButtonBack className='exclusive__movie__carousel__btn back'>
            <RxCaretLeft />
          </ButtonBack>
          <Slider className='slider'>
            {[...Array(movieLength)].map((movie) => (
              <Slide className='slide' key={nanoid()}>
                <Box w='450px' h='255px' bg='gray.500'></Box>
                <Text>Lamb (2021) Trailer</Text>
              </Slide>
            ))}
          </Slider>
          <ButtonNext className='exclusive__movie__carousel__btn forward'>
            <RxCaretRight />
          </ButtonNext>
        </CarouselProvider>
      </Box>
    </Stack>
  );
};
