import React, { useEffect } from 'react';
import logo from '../assets/2.png'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function Navbar() {
  const [visible, setVisible] = React.useState(false);
  const navigate = useNavigate();
  
  const onKeyDownhandler = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      navigate('/search');
    }
  };

  const [showCategories, setShowCategories] = React.useState(false);
  const wishlistno = useSelector((state)=>state.wishlist.items.length)
  const cartlistno = useSelector((state)=>state.cartlist.items.length)
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const categories = [
    "Serums", "Gels", "Sunscreen", "Exfoliators", "Moisturizers",
    "Oils", "Masks", "Toners", "Eye Care", "Mists", "Cleansers", "Lip Care", "Hand Care"
  ];

  useEffect(() => {
    setVisible(true);
  }, []);

  function NavbarMotion({ to, children }) {
    const isActive = location.pathname === to;
    return (
      <Link to={to} className="relative">
        <motion.span
          whileHover={{ color: '#d6d3d1', scale: 1.1 }}
          animate={{
            color: isActive ? '#facc15' : '#ffffff',
            fontWeight: isActive ? 600 : 500,
          }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
          className="px-2 sm:px-3 py-1 font-serif inline-block text-sm sm:text-base"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <div
      className={`fixed w-full z-20 transition-opacity duration-[3000ms] ease-in-out transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
      }`}
    >
     {/* upper navbar */}
<div className="h-[60%] flex flex-wrap items-center justify-between px-2 sm:px-4 md:px-6 bg-black bg-opacity backdrop-blur-sm shadow-gray-700 shadow-lg py-2">
  {/* left side */}
  <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
    <img src={logo} alt="logo" className="h-12 w-12 sm:h-16 sm:w-16" />
    <div className="font-family-satisfy font-extrabold text-lg sm:text-2xl text-white">
      GLOWRIN
    </div>
    <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 sm:px-4 sm:py-2 flex-grow max-w-full sm:max-w-sm shadow-sm mt-2 sm:mt-0">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={onKeyDownhandler}
        className="flex-grow outline-none text-xs sm:text-sm text-gray-700 placeholder-gray-400"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 ml-1 sm:ml-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
        />
      </svg>
    </div>
  </div>

  {/* right side */}
  <div className="flex flex-wrap items-center gap-1 sm:gap-4 text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-0">
    <NavbarMotion to="/">Home</NavbarMotion>
    <NavbarMotion to="/about">About</NavbarMotion>
    <NavbarMotion to="/contact">Contact</NavbarMotion>
    <NavbarMotion to='/wishlist'>
      <div className='relative'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={location.pathname === '/wishlist' ? '#facc15' : '#ffffff'}
          viewBox="0 0 512 512"
          className="h-4 w-4 sm:h-5 sm:w-5"
        >
          <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9s0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
        </svg>
        {wishlistno > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {wishlistno}
          </span>
        )}
      </div>
    </NavbarMotion>
    <NavbarMotion to="/cart">
      <div className='relative'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={location.pathname === '/cart' ? '#facc15' : '#ffffff'}
          viewBox="0 0 576 512"
          className="h-4 w-4 sm:h-5 sm:w-5"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        {cartlistno > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {cartlistno}
          </span>
        )}
      </div>
    </NavbarMotion>
  </div>
</div>


      {/* lower navbar */}
      <div className="h-12 backdrop-blur-sm shadow-lg bg-gray-950/30 flex items-center justify-evenly px-2 sm:px-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-8">
          <NavbarMotion to="/products" className="text-white font-medium font-serif text-xs sm:text-sm md:text-lg">
            Products
          </NavbarMotion>
          <div 
            className='relative'
            onMouseEnter={()=>setShowCategories(true)}
            onMouseLeave={()=>setShowCategories(false)}>
            <NavbarMotion to="/categories" className="text-white font-medium font-serif text-xs sm:text-sm md:text-lg">
              Categories
            </NavbarMotion>
            {showCategories && (
              <div className="fixed left-0 top-[85%] w-screen bg-white text-black shadow-lg z-50 px-4 sm:px-8 py-4 sm:py-6">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-4 max-w-screen-xl mx-auto">
                  {categories.map((category, index) => (
                    <Link 
                      key={index} 
                      to={`/categories?category=${category}`} 
                      className="px-2 py-1 sm:px-4 sm:py-2 hover:bg-gray-200 rounded text-sm sm:text-base font-medium whitespace-nowrap"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavbarMotion to="/sales" className="text-white font-medium font-serif text-xs sm:text-sm md:text-lg">
            Sales
          </NavbarMotion>
          <NavbarMotion to="/bestsellers" className="text-white font-medium font-serif text-xs sm:text-sm md:text-lg">
            Best Sellers
          </NavbarMotion>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
