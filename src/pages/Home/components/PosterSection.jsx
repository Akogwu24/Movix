import { Box, HStack, Img, Stack, Text } from '@chakra-ui/react';
import { PrimaryBtn } from '../../../components/common/CustomButtons';
import { Header } from './Header';
import { GoPlay } from 'react-icons/go';
import { sidePadding } from '../../../utils/theme';
import useDebounce from '../../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { getMovieWithVideos, getTrendingMovieOfTheDay, searchMovie } from '../service';
import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';
import { nanoid } from '@reduxjs/toolkit';
import YouTube from 'react-youtube';

import { IMG_ORIGINAL } from '../../../utils/utils';
import FullPageLoader from '../../../components/FullPageLoader';

export const PosterSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingMovieOfTheDay, setTrendingMovieOfTheDay] = useState([]);
  const [moviesWithVideo, setMoviesWithVideo] = useState(null);
  const debouncedSearch = useDebounce(searchTerm, 1500);
  const [movieID, setMovieID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovieOfTheDay(setTrendingMovieOfTheDay, setLoading);
  }, []);

  useEffect(() => {
    movieID && getMovieWithVideos(setMoviesWithVideo, movieID);
  }, [movieID]);

  useEffect(() => {
    debouncedSearch ? searchMovie(debouncedSearch, setTrendingMovieOfTheDay) : getTrendingMovieOfTheDay(setTrendingMovieOfTheDay);
  }, [debouncedSearch]);

  return loading ? (
    <FullPageLoader />
  ) : (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CarouselProvider
        infinite={true}
        visibleSlides={1}
        interval={10000}
        dragEnabled={true}
        isPlaying={true}
        lockOnWindowScroll={true}
        // naturalSlideWidth={200}
        // naturalSlideHeight={370}
        totalSlides={trendingMovieOfTheDay?.length}
        isIntrinsicHeight={true}
      >
        <Slider className='hero__slider'>
          {trendingMovieOfTheDay?.map((movie) => (
            <Slide className='slide' key={nanoid()}>
              <Stack as='section' className='poster__section' bgImage={`${IMG_ORIGINAL}/${movie?.backdrop_path}`}>
                <Stack px={sidePadding} justify='center' h='100%'>
                  <Stack w='360px' pt='10'>
                    <Text as='h1' lineHeight={1.2} fontWeight='700' fontSize='48px'>
                      {movie?.original_title || 'Title'}
                    </Text>
                    <HStack gap='2rem'>
                      <HStack>
                        <Img src='/images/imdb.svg' />
                        <Text>{parseFloat(movie?.vote_average * 10)?.toFixed(2)}/ 100</Text>
                      </HStack>
                      <HStack>
                        <Img src='/images/tomato.svg' />
                        <Text>{parseFloat(movie?.vote_average * 10)?.toFixed(2)}%</Text>
                      </HStack>
                    </HStack>
                    <Text py='2'>
                      {movie?.overview ||
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum'}
                    </Text>
                    <PrimaryBtn onClick={() => setMovieID(movie.id)} w='fit-content' px='2rem' bg='themeRed' leftIcon={<GoPlay size={20} />}>
                      WATCH TRAILER
                    </PrimaryBtn>
                  </Stack>
                </Stack>
              </Stack>
            </Slide>
          ))}
        </Slider>
        {/* <Box className='dot__wrapper' pos='relative' h='50px' overflow={'hidden'}>
          {/* <DotGroup dotNumbers={true} className='dot__group' showAsSelectedForCurrentSlideOnly={true}> */}
        {/* {trendingMovieOfTheDay.map((d, index) => (
            <Dot slide={index} key={index} className='dot'>
              <Text>{index + 1}</Text>
            </Dot>
          ))} */}
        {/* </DotGroup>
        </Box> */}
      </CarouselProvider>
      {moviesWithVideo ? (
        <YouTube onEnd={() => setMoviesWithVideo(null)} videoId={moviesWithVideo.key || 0} className='youtube' iframeClassName='youtube__iframe' />
      ) : null}
    </>
  );
};
