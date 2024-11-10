import { useState } from 'react'
import {Navbar} from './components/Navbar'
import {Carousel} from './components/Carousel'
import {Options} from './components/Options'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Dishes from './components/Dishes/Dishes';
// import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-100'>
      <Navbar/>
      <Carousel />
      <div className=' mt-5 bg-slate-300'>
      <Options />
      </div>
  
  <Dishes/>
      <div>
        
        
      </div>
    </div>
    </>
  )
}

export default App
