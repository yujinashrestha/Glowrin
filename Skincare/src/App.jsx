import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Skintype from './pages/Skintype';
import Ingredients from './pages/Ingredients';
import Treatments from './pages/Treatment';
import Brands from './pages/Brands';      
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/Productdetails';
import Checkout from './pages/Checkout';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';  


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/skintype" element={<Skintype />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
