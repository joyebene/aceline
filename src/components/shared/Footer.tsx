// components/Footer.js
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Company Info */}
        <div>
          <Link href="/">
            <span className="text-3xl font-bold text-red-500">aceline</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Award-winning branding agency transforming businesses through strategic design and data-driven insights.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="text-red-500 hover:text-red-400">
              <span className="sr-only">Facebook</span>
              <FaFacebook color='blue' size={24} />
            </a>
            <a href="#" className="text-red-500 hover:text-red-400">
              <span className="sr-only">Instagram</span>
              <BsInstagram color='#E4405F' size={23} />
            </a>
            <a href="#" className="text-red-500 hover:text-red-400">
              <span className="sr-only">Linkedin</span>
              <LiaLinkedin color='#0A66C2' size={30} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-red-500">About Us</Link>
            </li>
            <li>
              <Link href="/expertise" className="hover:text-red-500">Our Expertise</Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-red-500">Our Work</Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-red-500">Insights</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Contact</h3>
          <p className="text-sm text-gray-400">garki, Abuja</p>
          <p className="text-sm text-gray-400">FCT, Nigeria</p>
          <p className="mt-2 text-sm text-gray-400">Email: info@aceline.com</p>
          <p className="text-sm text-gray-400">Phone: +1-234-567-8900</p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest trends and insights.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md text-gray-100 focus:outline-none border border-gray-400"
            />
            <button className="bg-red-500 text-white p-2 rounded-r-md hover:bg-red-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>&copy; {currentYear} Aceline. All rights reserved. | <Link href="/terms" className="hover:text-red-500">Terms of Service</Link> | <Link href="/privacy" className="hover:text-red-500">Privacy Policy</Link></p>
      </div>
    </footer>
  );
}