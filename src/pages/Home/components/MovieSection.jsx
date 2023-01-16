import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { CategoryHead } from './CategoryHead';
import { useGetWindowSize } from '../../../hooks/useGetWindowSize';

export const MovieSection = ({ category, data, isPlaying = true }) => {
  const windowSize = useGetWindowSize();
  const [numberOfSlidesToRender, setNumberOfSlidesToRender] = useState(1);

  useEffect(() => {
    if (windowSize <= 600) {
      setNumberOfSlidesToRender(1);
    } else if (windowSize < 740) {
      setNumberOfSlidesToRender(2);
    } else if (windowSize < 1200) {
      setNumberOfSlidesToRender(3);
    } else {
      setNumberOfSlidesToRender(4);
    }
  }, [windowSize]);

  return (
    <Stack color='black' px={sidePadding} as='section' py='10'>
      <CategoryHead category={category} />
      <Box pos='relative'>
        <CarouselProvider
          infinite={true}
          visibleSlides={numberOfSlidesToRender || 4}
          dragEnabled={true}
          isPlaying={isPlaying}
          naturalSlideWidth={200}
          naturalSlideHeight={370}
          totalSlides={data?.length || 10}
          // isIntrinsicHeight={true}
        >
          <ButtonBack className='carousel__btn back'>
            <RxCaretLeft />
          </ButtonBack>
          <Slider className='slider'>
            <Flex gap='5'>
              {data?.map((movie) => (
                <Slide className='slide' key={nanoid()}>
                  <MovieCard key={nanoid()} movie={movie} />
                </Slide>
              ))}
            </Flex>
          </Slider>
          <ButtonNext className='carousel__btn forward'>
            <RxCaretRight />
          </ButtonNext>
        </CarouselProvider>
      </Box>
    </Stack>
  );
};
