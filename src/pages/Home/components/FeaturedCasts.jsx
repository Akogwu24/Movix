import { Box, Flex, HStack, Image, Img, Stack, Text } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { useState } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { CategoryHead } from './CategoryHead';

export const FeaturedCasts = () => {
  const [movieLength, setmovieLaength] = useState(10);
  return (
    <Stack color='black' px={sidePadding} as='section' py='10'>
      <CategoryHead category={'Featured Casts'} />
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
                <Stack mx='4'>
                  <Image src='/images/Poster.svg' alt='movie' w='250px' h='370px' objectFit='cover' shadow='sm' />

                  <Text as='h2' color='#111827'>
                    Keanu Reevs
                  </Text>
                </Stack>
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
