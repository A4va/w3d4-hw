import {
    Box,
    Button,
    Center,
    Heading,
    HStack,
    Image,
    Tag,
    Text,
    useColorModeValue,
    useColorMode
  } from "@chakra-ui/react";
  
  interface Info{
    city: string
    img: string
  }
  export function Cards(props: Info) {
  const { colorMode, toggleColorMode } = useColorMode();


    const items = [
        {item:["Desert", "Buildings"]},
        {item:["Nature", "Buildings"]},
        {item:["Desert", "Buildings"]},
        {item:["Desert", "Buildings"]},
        {item:["Desert", "Buildings"]},
    ]
    
    return (
        <Box maxW="420px" bg={useColorModeValue('gray.100', 'gray.900')} p="6" borderRadius={{md:20 ,lg:20}}>
            <Image borderRadius={15} h="200" w={"100%"}
                src={props.img}
                alt="carousel image"
                backgroundSize="cover"
              />
            <HStack mt="5" spacing="3">
              {["Waterfall", "Nature"].map((item) => (
                <Tag key={item} variant="outline">
                  {item}
                </Tag>
              ))}
            </HStack>
            <Heading my="4" size="lg">
              {props.city}
            </Heading>
            <Text>
              Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park
              in Iceland, and is one of the most popular sights in the park. It is
              surrounded by dark lava columns, which gave rise to its name. The base
              of this waterfall is noteworthy for its sharp rocks.
            </Text>
            <Center my="6">
              <Button colorScheme="blue">Learn more</Button>
            </Center>
          </Box>
    );
  }