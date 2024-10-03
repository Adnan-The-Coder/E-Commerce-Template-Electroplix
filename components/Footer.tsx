// Footer.tsx
"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 relative overflow-hidden">
      {/* Background typography */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <h1 className="font-bold text-9xl text-gray-500 dark:text-gray-600">Electroplix</h1>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <div className="text-3xl font-semibold mb-2">Electroplix</div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Your one-stop shop for electronics</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <nav className="flex flex-col space-y-1">
              <a href="/" className="hover:underline text-sm">Home</a>
              <a href="/about" className="hover:underline text-sm">About Us</a>
              <a href="/terms" className="hover:underline text-sm">Terms</a>
              <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Customer Service</h4>
            <nav className="flex flex-col space-y-1">
              <a href="/faq" className="hover:underline text-sm">FAQ</a>
              <a href="/contact" className="hover:underline text-sm">Contact Us</a>
              <a href="/shipping" className="hover:underline text-sm">Shipping Info</a>
              <a href="/returns" className="hover:underline text-sm">Returns & Exchanges</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <nav className="flex flex-col space-y-1">
              <a href="/facebook" className="hover:underline text-sm">Facebook</a>
              <a href="/twitter" className="hover:underline text-sm">Twitter</a>
              <a href="/instagram" className="hover:underline text-sm">Instagram</a>
              <a href="/linkedin" className="hover:underline text-sm">LinkedIn</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <nav className="flex flex-col space-y-1">
              <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
              <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
            </nav>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="my-6 border-t border-gray-300 dark:border-gray-700"></div>

        {/* Newsletter Subscription (optional) */}
        <div className="text-center mb-6">
          <h4 className="font-semibold mb-2">Subscribe to Our Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Subscribe</button>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Created By <a href="https://your-link.com" className="hover:underline">Adnan (Founder At Electroplix)</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
