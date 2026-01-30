import React, { useState, useEffect } from 'react';
import hero1 from '../assets/home1.webp';
import hero2 from '../assets/home2.webp';
import hero3 from '../assets/home3.webp';
import hero4 from '../assets/home4.webp';
import hero5 from '../assets/home5.webp';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Routetransition from '../components/Routetransition';

const images = [hero1, hero2, hero3, hero4, hero5];

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whyGlowrinItems = [
    { icon: '🧪', title: 'Science Meets Nature', desc: 'Clinically proven ingredients combined with gentle botanicals.' },
    { icon: '🌈', title: 'Glow for Every Skin', desc: 'Formulas for all skin types, especially sensitive and melanin-rich.' },
    { icon: '🌱', title: 'Clean & Conscious', desc: 'Free from parabens, sulfates, and harmful chemicals.' },
    { icon: '✨', title: 'Visible Results', desc: 'Long-lasting skin health and brightness from day one.' },
    { icon: '🤝', title: 'Community First', desc: 'Educating, uplifting, and empowering our customers.' },
  ];

  const testimonials = [
    { id: 1, image: hero1, quote: "Glowrin transformed my skin in 2 weeks!", author: "Sarah J." },
    { id: 2, image: hero2, quote: "Finally products that don't irritate sensitive skin.", author: "Michael T." },
    { id: 3, image: hero3, quote: "The natural glow I've achieved with Glowrin.", author: "Priya K." },
    { id: 4, image: hero4, quote: "Acne scars reduced after a month of use.", author: "Alex R." }
  ];

  const postcardVariants = {
    hidden: { opacity: 0, y: 50, x: -50 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] sm:h-[75vh] md:h-[85vh] w-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute top-1/3  text-center  p-4 sm:p-6 md:p-8 rounded-lg z-10 w-[90%] sm:w-[80%] md:w-[60%]">
          <Routetransition>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-family-outfit">
              Welcome to Glowrin
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-black font-family-outfit">
              Discover your natural glow with our curated skincare products.
            </p>
          </Routetransition>
        </div>
      </div>

      {/* WHY GLOWRIN Section */}
      <motion.div className="px-4 sm:px-6 md:px-12 py-12">
        <motion.h1
          className="text-center text-black font-semibold p-5 font-family-swash text-2xl sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          WHY GLOWRIN?
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {whyGlowrinItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-[90%] sm:w-[260px] md:w-[280px] hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 text-blue-600 text-xl sm:text-3xl flex items-center justify-center mb-4 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-black font-semibold mb-2 text-sm sm:text-base md:text-lg">{item.title}</h3>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="px-4 sm:px-6 md:px-12 py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12 font-family-swash"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real Stories, Real Glow
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={postcardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 20px rgba(0, 0, 0, 0.1)"
              }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 italic text-sm sm:text-base mb-2">"{testimonial.quote}"</p>
                <p className="text-black font-semibold text-xs sm:text-sm md:text-base">- {testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
