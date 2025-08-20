// src/components/Header.jsx
import { NavLink } from "react-router-dom";

function Header() {
  const baseClass =
    "px-4 py-2 transition-colors duration-200";
  const inactiveClass = "text-gray-700 hover:text-black";
  const activeClass =
    "text-white bg-black rounded-md";

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">Narad</h1>

        {/* Navigation Links */}
        <div className="space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aigenerate"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            AI Generator
          </NavLink>
          <NavLink
            to="/questionbank"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Question Bank
          </NavLink>
          <NavLink
            to="/surveymonitor"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Survey Monitor
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
