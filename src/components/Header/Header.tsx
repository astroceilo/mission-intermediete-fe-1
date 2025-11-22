import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { generalMenuItems } from "./HeaderMenuItems";
import logo from "../../assets/images/logo.png";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const hideMenus = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-other-border bg-white backdrop-blur-md transition-all 
      ${scrolled ? "bg-white/70 shadow-[0_2px_10px_rgba(0,0,0,0.06)]" : ""}`}
    >
      <div className="h-20 max-w-[1440px] mx-auto flex items-center justify-between md:gap-9 px-5 md:px-10! lg:px-[120px]! py-4 md:py-3.5! lg:py-3!">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="sr-only">Home</span>
          <img
            src={logo}
            className="w-[152px] h-[42px] md:w-[194.5px]! md:h-12! lg:w-[237px]! lg:h-14! object-contain"
            alt="Videobelajar Logo"
          />
        </Link>

        {/* Navigation links */}
        {!hideMenus && (
          <>
            <div className="hidden md:flex items-center gap-4">
              <nav className="flex items-center gap-9">
                <ul className="flex flex-col p-4 md:p-0 mt-4 border border-other-border rounded-[10px] bg-other-basebg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                  {generalMenuItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className="block py-2 px-3 text-text-dark-secondary hover:text-text-dark-primary text-other-body-medium-h3 transition-colors duration-300 ease-in-out"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex md:gap-4">
                <Link
                  to="/login"
                  className="text-white hover:text-main-primary bg-main-primary hover:bg-white border border-main-primary focus:ring focus:ring-main-primary shadow-xs text-other-body-medium-h1 rounded-[10px] px-[26px] py-2.5 focus:outline-none transition-colors duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-main-primary hover:text-white bg-white hover:bg-main-primary border border-main-primary focus:ring focus:ring-main-primary shadow-xs text-other-body-medium-h1 rounded-[10px] px-[26px] py-2.5 focus:outline-none transition-colors duration-300 ease-in-out"
                >
                  Register
                </Link>
              </div>
            </div>
            {/* Mobile menu toggle button */}
            <button
              className="md:hidden p-2 rounded focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Nav */}
      {!hideMenus && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute md:hidden w-full left-0 right-0 bg-white shadow-lg z-20 overflow-hidden"
            >
              <nav className="flex flex-col">
                {generalMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block w-full px-4 py-3 border border-other-border text-other-body-medium-h3 text-text-dark-secondary hover:text-text-dark-primary transition-colors duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col items-center gap-4 px-4 py-3">
                  <Link
                    to="/login"
                    className="w-full text-white hover:text-main-primary bg-main-primary hover:bg-white border border-main-primary text-other-body-medium-h1 rounded-[10px] px-4 py-2 text-center transition-colors duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="w-full text-main-primary hover:text-white bg-white hover:bg-main-primary border border-main-primary text-other-body-medium-h1 rounded-[10px] px-4 py-2 text-center transition-colors duration-300"
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}
