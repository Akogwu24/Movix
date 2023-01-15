import { Flex, HStack, Image, Img, Stack, Text } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { IMG_300, IMG_500 } from '../../../utils/utils';
import { getSingleMovie } from '../service';

export const MovieCard = ({ movie }) => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  // console.log('movieData', movieData);

  useEffect(() => {
    getSingleMovie(setMovieData, setLoading, movie?.id);
  }, [movie.id]);

  return (
    <Stack w='250px'>
      <Image
        src={movieData?.poster_path ? `${IMG_300}/${movieData?.poster_path}` : '/images/default-movie.jpg'}
        alt='movie'
        w='250px'
        h='370px'
        objectFit='cover'
        shadow='sm'
      />
      <Text as='small' color='#9CA3AF'>
        {movieData?.production_countries && movieData?.production_countries[0]?.iso_3166_1}, {parseInt(movieData?.release_date)} - Current
      </Text>
      <Text as='h2' color='#111827' noOfLines={1}>
        {movieData?.title}
      </Text>
      <HStack justify='space-between'>
        <HStack>
          <Img src='/images/imdb.svg' />
          <Text as='small'>{parseFloat(movieData?.vote_average * 10)?.toFixed(2)}/ 100</Text>
        </HStack>
        <HStack>
          <Img src='/images/tomato.svg' />
          <Text as='small'>{(movieData?.vote_average * 10).toFixed(2)}%</Text>
        </HStack>
      </HStack>
      <Flex wrap='wrap' gap='1'>
        {movieData?.genres?.map((g) => (
          <Text as='small' color='#9CA3AF' key={nanoid()}>
            {g.name}
          </Text>
        ))}
      </Flex>
    </Stack>
  );
};
