import React from 'react';
import { TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#home" className="text-white font-bold text-xl flex items-center">
              <span className="text-orange-500">RS</span>
              <span className="ml-1">45</span>
            </a>
            <p className="mt-4 text-gray-300">
              Official website of Indian cricket captain and legendary batsman Rohit Sharma.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#biography" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Biography</a>
              </li>
              <li>
                <a href="#statistics" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Statistics</a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Timeline</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">News</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">More Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">IPL Career</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Captaincy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Records</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Interviews</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Charity Work</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Brand Endorsements</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest news and updates about Rohit Sharma.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Rohit Sharma. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};