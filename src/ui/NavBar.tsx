import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './../components/Logo';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-row justify-between items-center p-3 border-b lg:px-32 md:px-10 text-xl bg-amber-50 relative text-black  drop-shadow-md">
      <div>
        <NavLink to={'/'} className=" flex">
          <Logo />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-12 md:gap-2 font-mono text-2xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `bg-sky-400 text-white rounded-md transition-all cursor-pointer p-3`
                : `rounded-md transition-all cursor-pointer p-3`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech"
            className={({ isActive }) =>
              isActive
                ? `bg-sky-400 text-white rounded-md transition-all cursor-pointer p-3`
                : `rounded-md transition-all cursor-pointer p-3`
            }
          >
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `bg-sky-400 text-white rounded-md transition-all cursor-pointer p-3`
                : `rounded-md transition-all cursor-pointer p-3`
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" md:hidden border border-blue-500 text-blue-500 p-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors "
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-full left-0 w-full  text-black bg-amber-50 
           text-center gap-6 font-semibold text-lg flex flex-col transition-all duration-300 z-[9999] ${
             isOpen
               ? 'translate-y-0 opacity-100'
               : '-translate-y-4 opacity-0 pointer-events-none'
           }`}
      >
        <li className="w-full">
          <NavLink
            to="/"
            className="block p-4 hover:bg-sky-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/tech"
            className="block p-4 hover:bg-sky-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Technology
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/about"
            className="block p-4 hover:bg-sky-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
