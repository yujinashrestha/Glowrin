import React, { use } from 'react'
import { useState, useEffect } from 'react'
import hero1 from '../assets/home1.webp'
import hero2 from '../assets/home2.webp'
import hero3 from '../assets/home3.webp'  
import hero4 from '../assets/home4.webp'
import hero5 from '../assets/home5.webp'  
import hero6 from '../assets/home6.webp'
import hero7 from '../assets/home7.webp'
import hero8 from '../assets/home8.webp'
import Layout from '../components/Layout'

const images=[hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8]


function Home() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
   useEffect(() => {
    const interval=setInterval(()=>{
      setCurrentIndex(prev=>(prev+1)% images.length)
    }, 10000)

    return()=>{
      clearInterval(interval)
    }

    }
   ,[])

  return (
    <Layout>
    
    <div className=' text-black'>
      {/* Hero Section */}
      <div className='bg-gray-100 h-screen flex items-center justify-center'>
        <div className='w-full h-full flex items-center justify-center relative  bg-black opacity-50'>
          <img src={images[currentIndex]} alt="Hero" className='w-full h-full object-cover' />
        
          
        </div>
    </div>
    </div>
    </Layout>
    
  )
}

export default Home