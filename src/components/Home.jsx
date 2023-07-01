import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IMG1 from '../assets/1.jpg';
import IMG2 from '../assets/2.jpg';
import IMG3 from '../assets/3.jpg';
import IMG4 from '../assets/4.jpg';
import IMG5 from '../assets/5.png';

const headingOptions = {
  bgColor: 'blackAlpha.600',
  color: 'white',
  top: '50%',
  left: '50%',
  p: '4',
  pos: 'absolute',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'fit-content'} p={16}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          borderBottom={'2px solid'}
          w={'fit-content'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          p={'4'}
          h={'full'}
          alignItems={'center'}
          direction={['column', 'column', 'column', 'column', 'row']}
        >
          <Image
            src={IMG5}
            h={['40', '200', '300', '300', '400']}
            filter={'hue-rotate(-130deg)'}
          />
          <Text
            textAlign={'justify'}
            letterSpacing={['normal', 'normal', 'normal', 'normal', 'wider']}
            lineHeight={['100%', '120%', '150%', '180%', '200%']}
            padding={['2', '6', '10', '14', '16']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id
            eum vitae natus quibusdam quasi nesciunt, sit vel esse repudiandae
            dignissimos? Recusandae reiciendis ducimus quasi soluta? Dolore illo
            quam corporis! Ipsam ducimus voluptatibus dolorem laborum eveniet
            dolorum excepturi rem voluptates praesentium repellat odio assumenda
            accusamus commodi laudantium error, nam quos voluptate animi est
            magni iusto iste cum ex obcaecati. Quasi. Libero aliquid tenetur
            modi neque commodi, enim eligendi voluptatibus repellendus dolores
            in quaerat pariatur quia unde illum natus error culpa dolore
            temporibus assumenda, soluta asperiores fugit. Autem quibusdam
            dolorem repellendus. Ad dolorum voluptatibus expedita quam
            consequatur praesentium hic molestias dolorem quas nostrum, sapiente
            impedit vero sequi obcaecati! Ducimus corrupti debitis aut. Impedit
            deleniti voluptates repudiandae quaerat, sapiente ex odio earum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={IMG1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading {...headingOptions}>Watch the Future</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={IMG2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading {...headingOptions}>Future is Gaming</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={IMG3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading {...headingOptions}>Gaming on Console</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={IMG4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading {...headingOptions}>Night Life is cool</Heading>
    </Box>
  </Carousel>
);

export default Home;
