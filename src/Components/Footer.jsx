import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 mt-16 py-12 shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Pizza House
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Authentic wood-fired pizzas crafted with the finest ingredients.
                Experience the taste of Italy right here in Pokhara.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-all duration-300 hover:scale-110 text-gray-700">
                  <MdFacebook size={20} />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-all duration-300 hover:scale-110 text-gray-700">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-all duration-300 hover:scale-110 text-gray-700">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-gray-200 p-2 rounded-lg group-hover:bg-gray-300 transition-colors text-gray-700">
                  <MdLocationOn size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Visit Us</p>
                  <p className="text-gray-600 text-sm">123 Lakeside Road<br />Pokhara, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-gray-200 p-2 rounded-lg group-hover:bg-gray-300 transition-colors text-gray-700">
                  <MdPhone size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Call Us</p>
                  <p className="text-gray-600 text-sm">+977 9800000000</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-gray-200 p-2 rounded-lg group-hover:bg-gray-300 transition-colors text-gray-700">
                  <MdEmail size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email Us</p>
                  <p className="text-gray-600 text-sm">contact@pizzahouse.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Opening Hours</h3>
            <div className="flex items-start gap-3 group">
              <div className="bg-gray-200 p-2 rounded-lg group-hover:bg-gray-300 transition-colors text-gray-700">
                <MdAccessTime size={18} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">Sun - Fri</span>
                  <span className="text-gray-600 text-sm">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">Saturday</span>
                  <span className="text-gray-600 text-sm">11:00 AM - 8:00 PM</span>
                </div>
                <div className="mt-3 p-2 bg-gray-200 rounded-lg">
                  <p className="text-xs text-center text-gray-600">
                    🍕 Late night delivery until 11 PM on weekends!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              {['Home', 'Menu', 'About Us', 'Reservations', 'Order Online', 'Catering', 'Reviews', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300 py-1 px-2 rounded hover:bg-gray-200 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Pizza House. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ in Pokhara, Nepal
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
