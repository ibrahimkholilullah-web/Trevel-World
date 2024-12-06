import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import visa1 from "../../assets/visa1.webp"
import visa2 from "../../assets/visa2.jpg"
import visa3 from "../../assets/visa3.jpg"
import visa4 from "../../assets/visa4.webp"
import visa5 from "../../assets/visa5.webp"
import visa6 from "../../assets/visa6.webp"
const Footer = () => {
  return (
    <footer className="bg-green-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Company */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Company</h4>
          <p className="text-gray-300 mb-4">
            Corporate business typically refers to large-scale enterprises or organizations.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-green-700 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Immigration */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Immigration</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Take IELTS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                PTE Coaching
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                SAT Coaching
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Student Visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Immigration Visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Diploma Visa
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Coaching
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Study Visas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Service
              </a>
            </li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            <img
              src={visa2}
              alt="Gallery item"
              className="rounded-md"
            />
            <img
              src={visa3}
              alt="Gallery item"
              className="rounded-md"
            />
            <img
              src={visa4}
              alt="Gallery item"
              className="rounded-md"
            />
            <img
              src={visa1}
              alt="Gallery item"
              className="rounded-md"
            />
            <img
              src={visa5}
              alt="Gallery item"
              className="rounded-md"
            />
            <img
              src={visa6}
              alt="Gallery item"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
        <div className="flex justify-center items-center space-x-6 text-sm">
          <a href="#" className="hover:text-white">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
        <p className="mt-4">
          © 2024 Routex. All Rights Reserved. Design By RRDevs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
