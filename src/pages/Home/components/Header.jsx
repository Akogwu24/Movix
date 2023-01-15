import { Circle, Flex, HStack, Img, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { sidePadding } from '../../../utils/theme';
import { capitalizeFirstLetter } from '../../../utils/utils';
import { logout } from '../../../redux/features/userSlice';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useEffect, useState } from 'react';

export const Header = ({ searchTerm, setSearchTerm }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const getUser = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      setUser(doc._document.data.value.mapValue.fields);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Flex as='nav' px={sidePadding} py='10' justify='space-between' align='center' pos='absolute' zIndex={10} w='100%'>
      <HStack>
        <Img src='/images/tv.svg' alt='tv' />
        <Text>MovieX</Text>
      </HStack>

      <InputGroup flex='0.6' minW='280px'>
        <Input
          placeholder='What do you want to watch?'
          _placeholder={{ color: 'white' }}
          color='gray.400'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>

      <Menu size='xs' borderColor='none'>
        <MenuButton cursor={'pointe'}>
          <HStack>
            <Text> Hi, {capitalizeFirstLetter(user?.fullName?.stringValue) || capitalizeFirstLetter(user?.fullName)}</Text>
            <Circle bg='themeRed' w='30px' h='30px' p='1'>
              <HiOutlineMenuAlt4 size={20} />
            </Circle>
          </HStack>
        </MenuButton>
        <MenuList border='none' bg='transparent' color='black' fontSize='14px'>
          <MenuItem w='fit-content' onClick={() => dispatch(logout())}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
