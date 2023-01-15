import { Box, Flex, Img, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { PrimaryBtn } from '../../components/common/CustomButtons';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PUBLIC_PATHS } from '../../app/routes';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { errorToast, successToast } from '../../components/ToastHandler';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/features/userSlice';

export const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginSuccess(user));
        successToast();
        setLoading(false);
      })
      .catch((error) => {
        errorToast(error.message);
        setLoading(false);
      });
  };

  return (
    <Flex h='100vh' justify='center' align='center'>
      <VStack as='form' border='1px solid rgba(0, 0, 0, 0.06)' px='10' py='4rem' onSubmit={handleLogin}>
        <Img src='/images/vector.svg' alt='movie' />
        <Text as='h2' color='gray.800' fontWeight={'700'}>
          Hi, Welcome
        </Text>
        <Text as='small' m='0  !important' pb='3'>
          Please sign-in to your account and start your experience
        </Text>
        <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Passwoard'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Box cursor='pointer' onClick={() => setShow(!show)}>
              {show ? <BiHide /> : <BiShowAlt />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <VStack pt='2rem' w='100%'>
          <PrimaryBtn w='100%' type='submit' isLoading={loading}>
            Login
          </PrimaryBtn>
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
