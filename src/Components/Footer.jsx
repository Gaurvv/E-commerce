import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-10 rounded-t-3xl mt-16 shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm sm:text-base">

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <div className="flex items-start gap-2 mb-2">
            <MdLocationOn className="text-xl mt-1" />
            <p>123 Lakeside Road, Pokhara, Nepal</p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <MdPhone className="text-xl mt-1" />
            <p>+977 9800000000</p>
          </div>
          <div className="flex items-start gap-2">
            <MdEmail className="text-xl mt-1" />
            <p>contact@pizzahouse.com</p>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-lg font-bold mb-4">Opening Hours</h2>
          <div className="flex items-start gap-2 mb-2">
            <MdAccessTime className="text-xl mt-1" />
            <div>
              <p>Sunday - Friday: 10:00 AM - 9:00 PM</p>
              <p>Saturday: 11:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Order Online</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-10 pt-4 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} Pizza House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
