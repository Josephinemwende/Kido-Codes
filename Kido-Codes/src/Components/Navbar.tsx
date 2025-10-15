import logo from '../assets/kido-codes-logo.png';
const Navbar = () => {
    return(
        <header className="flex justify-between items-center py-5 relative z-10">
            <nav className="flex justify-between items-center w-full px-6 py-4">
                <div className="flex items-center">
                    <img src={logo} alt="Kido Codes Logo" className="h-10 w-auto" />
                </div>
                <div className="hidden md:flex space-x-10 items-center">
                    <a href="#courses" className="text-gray-700 font-medium hover:text-green-800 transition border border-green-600 rounded-full px-4 py-2 border-2">
                        Home
                    </a>
                    <a href="#about" className="text-gray-700 font-medium hover:text-green-600 transition">
                        About Us
                    </a>
                    <div className="relative group">
                        <button className="text-gray-700 font-medium hover:text-green-600 transition flex items-center">
                            Courses
                            <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-md w-40">
                            <a href="#course1" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                                Coding
                            </a>
                            <a href="#course2" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                                Maths
                            </a>
                            <a href="#course3" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                                Art
                            </a>
                        </div>
                    </div>
                    <a href="#blog" className="text-gray-700 font-medium hover:text-green-600 transition">
                        Events
                    </a>
                    <a href="#login" className="text-gray-700 font-medium hover:text-green-600 transition">
                        Blog
                    </a>
                    <a href="#resources" className="text-gray-700 font-medium hover:text-green-600 transition">
                        Resources
                    </a>
                </div>
                <div className="hidden md:block">
                    <a
                    href="#"
                    className="bg-gradient-to-br from-green-600 to-green-400 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition"
                    >
                    Contact Us
                    </a>
                </div>
                <button
                    className="md:hidden text-gray-700 hover:text-green-600 transition focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>
    )
}
export default Navbar;