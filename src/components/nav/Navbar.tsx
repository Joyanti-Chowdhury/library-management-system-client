import { NavLink } from "react-router";
import logo from "../../assets/logo.jpg";
import { ModeToggle } from "../moode-toggol";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
   <div className="flex items-center justify-between gap-7 mr-6">
       <div className="flex items-center ">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <span className="text-2xl ml-2 font-bold">
          Library Management System
        </span>
      </div>

    <div className="flex items-center gap-9 justify-between">
        <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
        }
      >
        All Book
      </NavLink>
      <NavLink
        to={"/add-book"}
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
        }
      >
        Add Book
      </NavLink>
      <NavLink
        to={"/borrow-summary"}
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "text-amber-500 font-bold"
        }
      >
        Borrow Summary
      </NavLink>
    </div>
   </div>

      <div className="flex gap-4">
        <ModeToggle></ModeToggle>
        <Button  className="gap-7">Login</Button>
      </div>
    </nav>
  );
}
