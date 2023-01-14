import { HStack, Img, Stack, Text } from '@chakra-ui/react';
import { PrimaryBtn } from '../../../components/common/CustomButtons';
import { Header } from './Header';
import { GoPlay } from 'react-icons/go';
import { sidePadding } from '../../../utils/theme';

export const PosterSection = () => {
  return (
    <Stack as='section' className='poster__section'>
      <Header />
      <Stack px={sidePadding} justify='center' h='100%'>
        <Stack w='350px'>
          <Text as='h1' lineHeight={1.2} fontWeight='700' fontSize='48px'>
            John Wick 3 : Parabellum
          </Text>
          <HStack>
            <HStack>
              <Img src='/images/imdb.svg' />
              <Text>86.0 / 100</Text>
            </HStack>
            <HStack>
              <Img src='/images/tomato.svg' />
              <Text>97%</Text>
            </HStack>
          </HStack>
          <Text py='2'>
            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is
            the target of hit men and women everywhere.
          </Text>
          <PrimaryBtn w='fit-content' px='2rem' bg='themeRed' leftIcon={<GoPlay size={20} />}>
            WATCH TRAILER
          </PrimaryBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
