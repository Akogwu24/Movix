import { Circle, Divider, Flex, HStack, Img, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { sidePadding } from '../../../utils/theme';

export const Header = () => {
  return (
    <Flex as='nav' px={sidePadding} py='5' justify='space-between' align='center'>
      <HStack>
        <Img src='/images/tv.svg' alt='tv' />
        <Text>MovieX</Text>
      </HStack>

      <InputGroup flex='0.6' minW='280px'>
        <Input placeholder='What do you want to watch?' _placeholder={{ color: 'white' }} />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>

      <HStack>
        <Text> Hi, $Fullname</Text>
        <Circle bg='themeRed' w='30px' h='30px' p='1'>
          <HiOutlineMenuAlt4 size={20} />
        </Circle>
      </HStack>
    </Flex>
  );
};
