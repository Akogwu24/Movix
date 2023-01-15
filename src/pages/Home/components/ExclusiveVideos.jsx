import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { sidePadding } from '../../../utils/theme';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { CategoryHead } from './CategoryHead';
import { getMovieWithVideos, getUpcomingeMovies } from '../service';
import { IMG_500 } from '../../../utils/utils';
import { VscPlayCircle } from 'react-icons/vsc';
import YouTube from 'react-youtube';

export const ExclusiveVideos = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [clickedMovieID, setClickedMovieID] = useState(null);
  const [movieWithVideo, setMovieWithVideo] = useState(null);

  useEffect(() => {
    clickedMovieID && getMovieWithVideos(setMovieWithVideo, clickedMovieID);
  }, [clickedMovieID]);

  useEffect(() => {
    getUpcomingeMovies(setUpcomingMovies);
  }, []);

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
          totalSlides={10}
          isIntrinsicHeight={true}
        >
          <ButtonBack className='exclusive__movie__carousel__btn back'>
            <RxCaretLeft />
          </ButtonBack>
          <Slider className='slider'>
            <Flex gap='5'>
              {upcomingMovies?.map((movie) => (
                <Slide className='slide' key={nanoid()}>
                  <Stack w='380px' pos='relative'>
                    <Img w='100%' h='250px' objectFit='cover' src={`${IMG_500}/${movie?.poster_path}`} alt={movie?.title} />
                    <Box className='exclusive__play__btn'>
                      <VscPlayCircle size={40} onClick={() => setClickedMovieID(movie.id)} />
                    </Box>
                    <Text fontWeight={500}>{movie?.title || movie?.original_title}</Text>
                  </Stack>
                </Slide>
              ))}
            </Flex>
          </Slider>
          <ButtonNext className='exclusive__movie__carousel__btn forward'>
            <RxCaretRight />
          </ButtonNext>
        </CarouselProvider>
        {movieWithVideo ? (
          <YouTube
            onEnd={() => setMovieWithVideo(null)}
            videoId={movieWithVideo.key || 0}
            className='exclusive__youtube'
            iframeClassName='youtube__iframe'
          />
        ) : null}
      </Box>
    </Stack>
  );
};
