import { Box, Flex, Img, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { PrimaryBtn } from '../../components/common/CustomButtons';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PUBLIC_PATHS } from '../../app/routes';

export const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <Flex h='100vh' justify='center' align='center'>
      <VStack as='form' border='1px solid rgba(0, 0, 0, 0.06)' px='10' py='4rem'>
        <Img src='/images/vector.svg' alt='movie' />
        <Text as='h2' color='gray.800' fontWeight={'700'}>
          Hi, Welcome
        </Text>
        <Text as='small' m='0  !important' pb='3'>
          Please sign-in to your account and start your experience
        </Text>
        <Input placeholder='Email' />

        <InputGroup size='md'>
          <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Passwoard' />
          <InputRightElement width='4.5rem'>
            <Box cursor='pointer' onClick={() => setShow(!show)}>
              {show ? <BiHide /> : <BiShowAlt />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <VStack pt='2rem' w='100%'>
          <PrimaryBtn w='100%'>Login</PrimaryBtn>
          <Text as='small'>
            Don’t have an account?{' '}
            <Link to={PUBLIC_PATHS.REGISTER} style={{ color: '#B91C1C' }}>
              {' '}
              Register
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
};
