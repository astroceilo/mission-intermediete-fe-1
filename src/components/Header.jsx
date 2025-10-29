import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-y border-x-0 border-other-border">
      <div className="max-w-7xl flex items-center justify-between mx-auto py-3 px-4 gap-4 md:px-10 md:gap-6 xl:px-[120px] xl:gap-9">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="sr-only">Home</span>
          <img
            src={logo}
            className="w-[152px] h-[42px] md:w-[237px] md:h-14 object-contain"
            alt="Videobelajar Logo"
          />
        </Link>
        {/* End Logo */}

        {/* Hamburger */}
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* End Hamburger */}

        {/* Menu Hamburger */}
        <div
          className="hidden w-full absolute top-full left-0 right-0 z-20 bg-white/80 backdrop-blur-md rounded-b-lg shadow-md"
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium">
            <li className=" border-b border-other-border">
              <Link
                to="#"
                className="block py-2 px-3 md:p-0 text-text-dark-secondary hover:text-text-dark-primary font-medium text-base transition-colors duration-300"
              >
                Kategori
              </Link>
            </li>
            <div className="flex flex-col items-stretch gap-4 px-3 py-3">
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 md:p-0 text-white hover:text-primary bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-400 font-bold rounded-lg text-base text-center transition-colors duration-300 cursor-pointer"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block py-2 px-3 md:p-0 text-primary hover:text-white hover:bg-primary border border-primary focus:ring-4 focus:outline-none focus:ring-primary-400 font-bold rounded-lg text-base text-center transition-colors duration-300 cursor-pointer"
                >
                  Register
                </Link>
              </li>
            </div>
          </ul>
        </div>
        {/* End Menu Hamburger */}

        <div className="hidden md:flex md:items-center md:gap-6">
          {/* Button Login + Register */}
          <div className="flex item-center gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              to="/login"
              className="text-white hover:text-primary bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-400 font-bold rounded-lg text-base px-4 py-2 text-center transition-colors duration-300 cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-primary hover:text-white hover:bg-primary border border-primary focus:ring-4 focus:outline-none focus:ring-primary-400 font-bold rounded-lg text-base px-4 py-2 text-center transition-colors duration-300 cursor-pointer"
            >
              Register
            </Link>
          </div>
          {/* End Button Login + Register */}

          {/* Navbar */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-text-dark-secondary hover:text-text-dark-primary font-medium text-base transition-colors duration-300"
                  aria-current="page"
                >
                  Kategori
                </Link>
              </li>
            </ul>
          </div>
          {/* End Navbar */}
        </div>
      </div>
    </nav>
  );
}
