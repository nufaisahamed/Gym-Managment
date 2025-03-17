import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from "../assets/navbar/fitness.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t-2 border-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start animate-fadeIn">
            <img
              src={Logo}
              alt="Footer Logo"
              className="w-16 sm:w-20 md:w-24 h-auto mb-4 transform transition-all duration-300 hover:scale-110"
            />
            <p className="text-sm text-gray-400 text-center md:text-left">
              Empowering your fitness journey<br /> with strength, endurance, <br /> and
              transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slideUp">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300 text-center md:text-left">
              {["Home", "Program", "Trainers", "Membership", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Contact" ? "/contact" : "#"} // Navigate to /contact for the Contact link
                    className="hover:text-red-800 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slideUp delay-100">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300 text-center md:text-left">
              <li>Email: info@fitness.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Fitness St, Workout City</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-slideUp delay-200">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white hover:text-red-800 transition-all duration-300 transform hover:scale-125"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400 animate-fadeIn">
          <p>&copy; {new Date().getFullYear()} Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;