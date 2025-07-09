import { NavLink } from "react-router";
import logo from "../../assets/logo.jpg";
import { ModeToggle } from "../moode-toggol";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
  <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-5">
        {/* Left section: Logo and menu */}
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-xl sm:text-2xl ml-2 font-bold text-gray-800 dark:text-white">
              Library Management
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7 ml-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
              }
            >
              All Book
            </NavLink>
            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
              }
            >
              Add Book
            </NavLink>
            <NavLink
              to="/borrow-summary"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
              }
            >
              Borrow Summary
            </NavLink>
          </div>
        </div>

        {/* Right section: Mode toggle + login */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="hidden sm:flex">Login</Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "block text-primary font-bold" : "block text-amber-500 font-bold"
            }
            onClick={() => setMenuOpen(false)}
          >
            All Book
          </NavLink>
          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              isActive ? "block text-primary font-bold" : "block text-amber-500 font-bold"
            }
            onClick={() => setMenuOpen(false)}
          >
            Add Book
          </NavLink>
          <NavLink
            to="/borrow-summary"
            className={({ isActive }) =>
              isActive ? "block text-primary font-bold" : "block text-amber-500 font-bold"
            }
            onClick={() => setMenuOpen(false)}
          >
            Borrow Summary
          </NavLink>
          <Button className="w-full">Login</Button>
        </div>
      )}
    </nav>
  




  //   <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
  //  <div className="flex items-center justify-between gap-7 mr-6">
  //      <div className="flex items-center ">
  //       <img src={logo} alt="logo" className="w-10 h-10" />
  //       <span className="text-2xl ml-2 font-bold">
  //         Library Management System
  //       </span>
  //     </div>

  //   <div className="flex items-center gap-9 justify-between">
  //       <NavLink
  //       to={"/"}
  //       className={({ isActive }) =>
  //         isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
  //       }
  //     >
  //       All Book
  //     </NavLink>
  //     <NavLink
  //       to={"/add-book"}
  //       className={({ isActive }) =>
  //         isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
  //       }
  //     >
  //       Add Book
  //     </NavLink>
  //     <NavLink
  //       to={"/borrow-summary"}
  //       className={({ isActive }) =>
  //         isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
  //       }
  //     >
  //       Borrow Summary
  //     </NavLink>
  //   </div>
  //  </div>

  //     <div className="flex gap-4">
  //       <ModeToggle></ModeToggle>
  //       <Button  className="gap-7">Login</Button>
  //     </div>
  //   </nav>
  );
}
