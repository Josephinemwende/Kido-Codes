import { useState } from 'react';
import logo from '../assets/kiddo-logo.jpeg';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header id="navbar" className="relative z-50 mb-10">
            <nav className="flex justify-between items-center ">
                <div className="flex items-center">
                    <img src={logo} alt="Kido Codes Logo" className="h-20 w-20 rounded-full" />
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-gray-700 font-medium hover:text-green-800 transition border border-green-600 rounded-full px-4 py-2 border-2" href="#home">Home</a>
                    <a className="text-gray-700 font-medium hover:text-green-600 transition" href="#about">About Us</a>

                    {/* Dropdown */}
                    <div className="relative group">
                        <button className="text-gray-700 font-medium hover:text-green-600 transition flex items-center">
                        Courses
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </button>

                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40">
                            <a className="block px-4 py-2 text-gray-700 hover:bg-green-100" href="#coding">Coding</a>
                            <a className="block px-4 py-2 text-gray-700 hover:bg-green-100" href="#maths">Maths</a>
                            <a className="block px-4 py-2 text-gray-700 hover:bg-green-100" href="#art">Art</a>
                        </div>
                    </div>

                    <a className="text-gray-700 font-medium hover:text-green-600 transition" href="#events">Events</a>
                    <a className="text-gray-700 font-medium hover:text-green-600 transition" href="#blog">Blog</a>
                    <a className="text-gray-700 font-medium hover:text-green-600 transition" href="#resources">Resources</a>
                </div>
                <div className="hidden md:block">
                    <a href="#" className="bg-gradient-to-br from-green-600 to-green-400 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition">
                        Contact Us
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
                <a className="mobile-link" href="#home">Home</a>
                <a className="mobile-link" href="#about">About Us</a>
                <a className="mobile-link" href="#coding">Coding</a>
                <a className="mobile-link" href="#maths">Maths</a>
                <a className="mobile-link" href="#art">Art</a>
                <a className="mobile-link" href="#events">Events</a>
                <a className="mobile-link" href="#blog">Blog</a>
                <a className="mobile-link" href="#resources">Resources</a>
                <a className="btn-primary block text-center" href="#contact">
                    Contact Us
                </a>
            </div>
            )}
        </header>
    )
}
export default Navbar;