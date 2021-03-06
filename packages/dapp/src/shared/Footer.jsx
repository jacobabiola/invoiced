import { Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

import logo from '../assets/logo2.png';

export const Footer = ({ center }) => {
  return (
    <Flex
      position="absolute"
      bottom="0"
      right="0"
      w="100%"
      h="5rem"
      py="1rem"
      px="3rem"
      align="center"
      justify={center ? 'center' : { base: 'center', lg: 'flex-end' }}
    >
      <Link href="#" isExternal zIndex={5}>
        <Image src={logo} alt="invoiced" />
      </Link>
    </Flex>
  );
};
