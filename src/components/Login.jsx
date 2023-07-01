import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button type="submit" colorScheme="purple">
            Login
          </Button>
          <Text textAlign={'right'}>
            <Link to={'/signup'}>
              New User?{' '}
              <Button colorScheme="purple" variant={'link'}>
                Signup
              </Button>
            </Link>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
