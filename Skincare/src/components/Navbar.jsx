import React from 'react'
import logo from '../assets/2.png' // Ensure the path is correct
import { Link } from 'react-router-dom' // Import Link from react-router-dom

function Navbar() {
  return (
    <div className='h-[170px] w-[100vw] bg-amber-50 fixed'>
        {/* upper navbar */}
        <div className='h-[60%] flex items-center justify-between px-4 text-black'>
            {/* left side */}
            <div className='flex items-center gap-4'>
                <img src={logo} alt="logo" className='h-16 w-16' />
                <div className='font-family-satisfy font-extrabold text-2xl'>GLOWRIN</div>
                <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-full max-w-sm shadow-sm">
  <input
    type="text"
    placeholder="Search products..."
    className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-28 h-5 text-gray-500 ml-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
  </svg>
  
</div>
</div>
{/* right side of the navbar*/ }
  
               <div className='flex items-center gap-4 text-black'>
            
              <Link to='/' className='flex items-center gap-4 ml-4 font-medium font-serif text-black'>Home</Link>
            <Link to='/about' className='flex items-center gap-4 ml-4 font-medium font-serif text-black'>About</Link>
            <Link to='/signup' className='flex items-center gap-4 ml-4 font-medium font-serif text-black'>Sign up</Link>
            <Link to='/contact' className='flex items-center gap-4 ml-4 font-medium font-serif text-black'>Contact</Link>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-7 w-7'><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
            </div>
           <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-8 w-8'><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </div>
            </div>
            
            
            
        </div>
        {/* lower navbar */}
        <div className='h-[40%] bg-gray-950 text-white flex items-center justify-evenly px-4 '>
            <div className='flex items-center gap-14'>
                <Link to='/brands' className='text-white font-medium font-serif text-lg ml-4'>Brand</Link>
                <Link to='/products' className='text-white font-medium font-serif text-lg ml-4'>Products</Link>
                <Link to='/categories' className='text-white font-medium font-serif text-lg ml-4'>Categories</Link>
                <Link to='/skintype' className='text-white font-medium font-serif text-lg ml-4'>Skin Type</Link>
                <Link to='/ingredients' className='text-white font-medium font-serif text-lg ml-4'>Ingredients</Link>
                <Link to='/treatments' className='text-white font-medium font-serif text-lg ml-4'>Treatments</Link>     
            </div>
            
        </div>


    </div>
    
  )
}

export default Navbar