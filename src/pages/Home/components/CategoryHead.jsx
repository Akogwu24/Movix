import { HStack, Text } from '@chakra-ui/react';
import { RxCaretRight } from 'react-icons/rx';

export const CategoryHead = ({ category }) => {
  return (
    <HStack justify='space-between' py='5'>
      <Text as='h1' fontSize='36px' fontWeight={600}>
        {category}
      </Text>
      <HStack color='themeRed'>
        <Text as='small'>See more</Text>
        <RxCaretRight />
      </HStack>
    </HStack>
  );
};
