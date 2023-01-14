import { HStack, Image, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const MovieCard = () => {
  return (
    <Stack w='250px' mx='3'>
      <Image src='/images/Poster.svg' alt='movie' w='250px' h='370px' objectFit='cover' shadow='sm' />
      <Text as='small' color='#9CA3AF'>
        USA, 2016 - Current
      </Text>
      <Text as='h2' color='#111827'>
        Batman Begins
      </Text>
      <HStack justify='space-between'>
        <HStack>
          <Img src='/images/imdb.svg' />
          <Text as='small'>86.0 / 100</Text>
        </HStack>
        <HStack>
          <Img src='/images/tomato.svg' />
          <Text as='small'>97%</Text>
        </HStack>
      </HStack>
      <Text as='small' color='#9CA3AF'>
        Action, Adventure, Horror
      </Text>
    </Stack>
  );
};
