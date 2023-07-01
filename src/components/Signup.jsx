import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar boxSize={'32'} alignSelf={'center'} />
          <Input
            type="text"
            placeholder="Name"
            required
            focusBorderColor="purple"
          />
          <Input
            type="email"
            placeholder="Email"
            required
            focusBorderColor="purple"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor="purple"
          />
          <Button type="submit" colorScheme="purple">
            Login
          </Button>
          <Text textAlign={'right'}>
            <Link to={'/login'}>
              already SignUp?{' '}
              <Button colorScheme="purple" variant={'link'}>
                Login
              </Button>
            </Link>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
