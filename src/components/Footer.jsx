import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineSend,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={'40'} p={'16'} bgColor={'blackAlpha.900'} color={'white'}>
      <Stack
        direction={['column', 'column', 'column', 'row']}
        gap={['10', '10', '10', '0']}
      >
        <VStack paddingX={'4'} w={'full'} alignItems={'stretch'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'center', 'center', 'center', 'left']}
          >
            Subscribe to get Updates
          </Heading>
          <HStack py={'2'} borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here ...."
              border={'none'}
              borderRadius={'none'}
              focusBorderColor="none"
              outline={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          paddingX={'2'}
          borderLeft={['none', 'none', 'none', '2px solid white']}
          borderRight={['none', 'none', 'none', '2px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>@All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target="blank" href="https://youtube.com">
              <HStack justifyItems={'center'} alignItems={'center'}>
                <AiOutlineYoutube />
                <Text>YouTube</Text>
              </HStack>
            </a>
          </Button>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target="blank" href="https://linkedin.com">
              <HStack justifyItems={'center'} alignItems={'center'}>
                <AiOutlineLinkedin />
                <Text>LinkedIn</Text>
              </HStack>
            </a>
          </Button>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target="blank" href="https://github.com">
              <HStack justifyItems={'center'} alignItems={'center'}>
                <AiOutlineGithub />
                <Text>GitHub</Text>
              </HStack>
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
