import { ChakraProvider, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/Nav'
import img1 from "../src/assets/img1.jpg"
import img2 from "../src/assets/img2.jpg"
import img3 from "../src/assets/img3.jpg"
import img4 from "../src/assets/img4.jpg"
import img5 from "../src/assets/img5.jpg"
import Carousel from './components/Carousel'

import {Cards} from './components/Cards'
import Footer from './components/Footer'
import './index.css'


  const imgs =[img1, img2,img3, img4,img5]

  const cities =["Riyadh", "Jeddah", "Dammam", "Macca","Alula"]


  

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <App />
    <Nav />
    <Carousel />
    <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} justifyItems={"center"}
    p={{ base: "0", md: "8", lg: "16" }} as="section" gap={10}>
      
      {imgs.map((e,i)=> <Cards img={e} city={cities[i]}/>)}
    </SimpleGrid>
    <Footer/>
  </ChakraProvider>
)
