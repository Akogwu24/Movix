import { HStack, Stack, Text } from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Stack as='footer' pb='12' gap='4' color='black' align='center'>
      <HStack justify='center' gap='5' fontSize='1.2rem'>
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </HStack>
      <HStack gap='5'>
        <Text>Conditions of Use</Text>
        <Text>Privacy & Policy</Text>
        <Text>Press Room</Text>
      </HStack>
      <Text color='#6B7280'>&#169; 2021 Movix</Text>
    </Stack>
  );
};
