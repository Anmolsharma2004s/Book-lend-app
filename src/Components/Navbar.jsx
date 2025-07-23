import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Language Selector */}
        <div className="flex items-center gap-2">
  <i className="ri-global-line text-white text-xl"></i>
  <select className="px-1 py-1 rounded-md bg-white text-black shadow-sm focus:outline-none">
    <option value="en">English</option>
    <option value="es">Spanish</option>
    
    <option value="fr">French</option>
    <option value="de">German</option>
    <option value="zh">Chinese</option>
  </select>
</div>

        {/* Logo / Brand */}
        <div className="text-white text-3xl font-extrabold tracking-wide animate-fade-in">
          <span className='text-yellow-300 font-sans'> Book </span>
          <span className='text-red-600 animate-pulse font-serif'>Lend App</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-12 animate-fade-in">
          <Link to="/" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-110">Home</Link>
          <Link to="/lend" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-110">Lend a Book</Link>
          <Link to="/books" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-110">View Books</Link>
          <Link to="/contact" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-110">Contact</Link>
        </div>
      </nav>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease;
          }
        `}
      </style>
    </header>
  )
}

export default Navbar
