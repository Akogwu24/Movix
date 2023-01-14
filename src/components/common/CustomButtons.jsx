import { Button } from '@chakra-ui/react';

export const PrimaryBtn = ({ children, ...props }) => {
  return (
    <Button color='#fff' bg='black' _hover={{ bg: 'gray.700' }} {...props}>
      {children}
    </Button>
  );
};
