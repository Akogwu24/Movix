import { Box, Flex, Img, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_PATHS } from '../../app/routes';
import { PrimaryBtn } from '../../components/common/CustomButtons';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { errorToast, successToast } from '../../components/ToastHandler';
import { addDoc, collection } from 'firebase/firestore';
import { loginSuccess } from '../../redux/features/userSlice';
import { useDispatch } from 'react-redux';

export const Register = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({ fullName: '', password: '', email: '' });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, fullName, password } = formValues;
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db, 'users'), { fullName, email, isVerified: user.emailVerified, userId: user.uid });

      dispatch(loginSuccess({ accessToken: user.accessToken, fullName, email, isVerified: user.emailVerified, userId: user.uid }));
      successToast('Successfully Registered');
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      errorToast(error.message);
      setLoading(false);
    }
  };

  // const handleSignUp = async (email, password, username) => {
  //   try {
  //     const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
  //     db.collection('users').add({
  //       owner_id: authUser.user.id,
  //       username,
  //       email: authUser.user.email,
  //       profilePic: 'https://vwnvchbdcwuhidncw9uchihwjc9wh',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Flex h='100vh' justify='center' align='center'>
      <VStack as='form' border='1px solid rgba(0, 0, 0, 0.06)' px='10' py='4rem' onSubmit={handleRegister}>
        <Img src='/images/vector.svg' alt='movie' />
        <Text as='h2' color='gray.800' fontWeight={'700'}>
          Hi, Welcome
        </Text>
        <Text as='small' m='0  !important' pb='3'>
          Please register your account and start your experience
        </Text>
        <Input placeholder='Full Name' name='fullName' required onChange={onChange} />
        <Input placeholder='Email' type='email' name='email' required onChange={onChange} />

        <InputGroup size='md'>
          <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Passwoard' required name='password' onChange={onChange} />
          {/* {error && <Text as='small' color='crimson'>Password Must be more than 4digits </Text>} */}
          <InputRightElement width='4.5rem'>
            <Box cursor='pointer' onClick={() => setShow(!show)}>
              {show ? <BiHide /> : <BiShowAlt />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <VStack pt='2rem' w='100%'>
          <PrimaryBtn w='100%' type='submit' isLoading={loading}>
            REGISTER
          </PrimaryBtn>
          <Text as='small'>
            Already have an account?
            <Link to={PUBLIC_PATHS.LOGIN} style={{ color: '#B91C1C' }}>
              {' '}
              Login
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
};
