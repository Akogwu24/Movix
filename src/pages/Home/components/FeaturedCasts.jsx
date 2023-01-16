import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { useEffect, useState } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { sidePadding } from '../../../utils/theme';
import { IMG_300 } from '../../../utils/utils';
import { getFeaturedCasts } from '../service';
import { CategoryHead } from './CategoryHead';

export const FeaturedCasts = () => {
  const [featuredCasts, setFeaturedCasts] = useState([]);
  const windowSize = useGetWindowSize();
  const [numberOfSlidesToRender, setNumberOfSlidesToRender] = useState(1);

  useEffect(() => {
    getFeaturedCasts(setFeaturedCasts);
  }, []);

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
      <CategoryHead category={'Featured Casts'} />
      <Box pos='relative'>
        <CarouselProvider
          infinite={true}
          visibleSlides={numberOfSlidesToRender}
          dragEnabled={true}
          isPlaying={true}
          naturalSlideWidth={200}
          naturalSlideHeight={370}
          totalSlides={featuredCasts.length}
          // isIntrinsicHeight={true}
        >
          <ButtonBack className='carousel__btn back'>
            <RxCaretLeft />
          </ButtonBack>
          <Slider className='slider'>
            {featuredCasts?.map((cast) => (
              <Slide className='slide' key={nanoid()}>
                <Stack mx='4'>
                  <Image src={`${IMG_300}/${cast?.profile_path}`} alt='movie' w='250px' h='370px' objectFit='cover' shadow='sm' />

                  <Text as='h2' color='#111827'>
                    {cast?.name}
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
