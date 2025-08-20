import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = "block px-4 py-2 transition-colors duration-200";
  const inactiveClass = "text-gray-700 hover:text-black";
  const activeClass = "text-white bg-black rounded-md";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">Narad</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2">
          {["/", "/aigenerate", "/questionbank", "/surveymonitor", "/analytics", "/about"].map((path, idx) => {
            const label = ["Home", "AI Generator", "Question Bank", "Survey Monitor", "Analytics", "About"][idx];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            {["/", "/aigenerate", "/questionbank", "/surveymonitor", "/analytics", "/about"].map((path, idx) => {
              const label = ["Home", "AI Generator", "Question Bank", "Survey Monitor", "Analytics", "About"][idx];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={({ isActive }) =>
                    `${baseClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
