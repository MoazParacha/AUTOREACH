import { useState } from "react";
import img1 from "../assets/img1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="pl-2">
        <img src={img1} className="h-10 w-auto" alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-black gap-6">
        <button className="hover:text-blue-600 transition duration-300 mt-4" >Product</button>
        <button className="hover:text-blue-600 transition duration-300 mt-4" >Solutions</button>
        <button className="hover:text-blue-600 transition duration-300 mt-4" >Company</button>
        <button className="hover:text-blue-600 transition duration-300 mt-4" >Pricing</button>
        <button className="hover:text-blue-600 transition duration-300 mt-4" >Customer Stories</button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 pe-5">
        <button className="px-4 py-2 border rounded">Log In</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Try For Free
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger / Close Icon */}
          <svg
            className="w-7 h-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-6 text-black text-lg z-50">
          <div>Product</div>
          <div>Solutions</div>
          <div>Company</div>
          <div>Pricing</div>
          <div>Customer Stories</div>
          <hr className="w-2/3" />
          <button className="px-4 py-2 border rounded w-40">Log In</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded w-40">
            Try For Free
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
