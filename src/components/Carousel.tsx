import React, { ReactNode, useEffect, useState } from "react";
import { Box, Flex, Image, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"



export default function App(){
  const slides = [
    {
        img: img1
      },
      {
        img: img2,
      },
      {
        img: img3
      },
      {
        img: img4
      },
      {
        img: img5
      },
  ];

  const txts =["Riyadh", "Jeddah", "Dammam", "Macca","Alula"]
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  const { colorMode, toggleColorMode } = useColorMode();
  const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.300', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );

  return (
      <Flex  w="full" overflow="hidden" pos="fixed" top={0} zIndex={-100}>
        <Flex pos="relative" h="100vh" w="full" {...carouselStyle} >

          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Text bg={useColorModeValue('gray.100', 'gray.900')}
                fontWeight="bold"
                fontSize="2rem"
                p=".5rem 2rem"
                borderRadius=".5rem "
                color="#2f855a"
                mt = "8rem"
                ml={{ base: "3", md: "16", lg: "16" }}
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >     
              {txts[sid]}          
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
  );
};
