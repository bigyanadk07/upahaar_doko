import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 text-sm py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Top Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="hover:text-black">
            <Twitter size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-black">
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-black">
            <Facebook size={16} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-2 text-center">
          ©2025 UpaharDoko. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// This Footer component can be imported and used in your main App component or any other page component.