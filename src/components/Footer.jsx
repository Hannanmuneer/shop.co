import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="relative bg-[#F0F0F0] text-black pt-44 sm:pt-40 md:pt-44 lg:pt-36 pb-8 mt-48 sm:mt-40 md:mt-44 lg:mt-36 font-sans">
      
     
      <div className="absolute -top-36 sm:-top-28 md:-top-32 lg:-top-24 left-1/2 transform -translate-x-1/2 w-[92%] max-w-7xl bg-black text-white rounded-[20px] p-6 sm:px-10 md:px-12 py-8 lg:py-9 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
     
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight text-center lg:text-left max-w-xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

   
        <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[350px]">
   
          <div className="relative w-full">
            <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-black placeholder-gray-400 text-sm focus:outline-none"
            />
          </div>

       
          <button className="w-full bg-white text-black font-medium text-sm py-3 rounded-full hover:bg-gray-200 transition active:scale-95">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b border-black/10">
          
    
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <h3 className="text-3xl font-extrabold tracking-tight">SHOP.CO</h3>
            <p className="text-black/60 text-sm leading-relaxed max-w-sm">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
    
            <div className="flex items-center gap-3 mt-1">
              <a href="#" className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs text-black hover:bg-black hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs text-black hover:bg-black hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs text-black hover:bg-black hover:text-white transition">
                <FaGithub />
              </a>
            </div>
          </div>

    
          <div className="col-span-1">
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">COMPANY</h4>
            <ul className="flex flex-col gap-3 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition">About</a></li>
              <li><a href="#" className="hover:text-black transition">Features</a></li>
              <li><a href="#" className="hover:text-black transition">Works</a></li>
              <li><a href="#" className="hover:text-black transition">Career</a></li>
            </ul>
          </div>

        
          <div className="col-span-1">
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">HELP</h4>
            <ul className="flex flex-col gap-3 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition">Customer Support</a></li>
              <li><a href="#" className="hover:text-black transition">Delivery Details</a></li>
              <li><a href="#" className="hover:text-black transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
            </ul>
          </div>

    
          <div className="col-span-1">
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">FAQ</h4>
            <ul className="flex flex-col gap-3 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition">Account</a></li>
              <li><a href="#" className="hover:text-black transition">Manage Deliveries</a></li>
              <li><a href="#" className="hover:text-black transition">Orders</a></li>
              <li><a href="#" className="hover:text-black transition">Payments</a></li>
            </ul>
          </div>

      
          <div className="col-span-1">
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-4">RESOURCES</h4>
            <ul className="flex flex-col gap-3 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition">Free eBooks</a></li>
              <li><a href="#" className="hover:text-black transition">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-black transition">How to - Blog</a></li>
              <li><a href="#" className="hover:text-black transition">Youtube Playlist</a></li>
            </ul>
          </div>

        </div>

   
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-sm text-black/60 text-center sm:text-left">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          
      
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="bg-white px-3 py-1.5 rounded border border-black/10 text-xs font-bold text-blue-700">VISA</span>
            <span className="bg-white px-3 py-1.5 rounded border border-black/10 text-xs font-bold text-red-500">MasterCard</span>
            <span className="bg-white px-3 py-1.5 rounded border border-black/10 text-xs font-bold text-blue-500">PayPal</span>
            <span className="bg-white px-3 py-1.5 rounded border border-black/10 text-xs font-bold text-black">Pay</span>
            <span className="bg-white px-3 py-1.5 rounded border border-black/10 text-xs font-bold text-gray-700">G Pay</span>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;