import { Flex, Spinner } from '@chakra-ui/react';

export default function FullPageLoader({ h }) {
  return (
    <Flex bg='gray.400' justifyContent='center' alignItems='center' height={h || '100vh'} width='100%'>
      <Spinner color='primary' w='50px' h='50px' speed='0.65s' thickness='5px' />
    </Flex>
  );
}
