import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 flex-wrap">
        
        {/* Brand Section */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-3xl font-bold text-white">Glowrin</h2>
          <p className="mt-3 text-sm">
            Radiant skincare, naturally. Glow from within with clean, cruelty-free products.
          </p>
          <div className="flex gap-4 mt-4 text-pink-400">
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to='/' className="hover:text-pink-400">Home</Link></li>
            <li><Link to='/Shop' className="hover:text-pink-400">Shop</Link></li>
            <li><Link to='/about' className="hover:text-pink-400">About</Link></li>
            <li><Link to='/contact' className="hover:text-pink-400">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-400">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400">Terms</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-lg font-semibold text-white mb-4">Join Our Glow Club ✨</h4>
          <p className="text-sm mb-4">Get skincare tips & exclusive offers straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg border border-gray-600 bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 w-full"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Glowrin Skincare. All rights reserved.
      </div>
    </footer>
  );
}
