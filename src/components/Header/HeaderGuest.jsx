import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HeaderWrapper from "./HeaderWrapper";

export default function HeaderGuest() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const left = (
    <Link to="/" className="flex items-center space-x-3">
      <img
        src={logo}
        className="w-[152px] h-[42px] md:w-[237px] md:h-14 object-contain"
        alt="Videobelajar Logo"
      />
    </Link>
  );

  const right = !isAuthPage ? (
    <>
      <Link
        to="#"
        className="block py-2 px-3 text-text-dark-secondary hover:text-text-dark-primary font-medium text-base transition-colors duration-300"
        aria-current="page"
      >
        Kategori
      </Link>
      <Link
        to="/login"
        className="text-white hover:text-primary bg-primary hover:bg-white border border-primary focus:ring-4 focus:outline-none focus:ring-primary-400 font-bold rounded-lg text-base px-4 py-2 text-center transition-colors duration-300"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-primary hover:text-white bg-white hover:bg-primary border border-primary focus:ring-4 focus:outline-none focus:ring-primary-400 font-bold rounded-lg text-base px-4 py-2 text-center transition-colors duration-300"
      >
        Register
      </Link>
    </>
  ) : null;

  const menu = !isAuthPage ? (
    <ul className="flex flex-col font-medium">
      <li className="border-b border-other-border">
        <Link
          to="#"
          className="block py-2 px-3 text-text-dark-secondary hover:text-text-dark-primary font-medium text-base"
        >
          Kategori
        </Link>
      </li>
      <div className="flex flex-col gap-3 px-3 py-3">
        <li>
          <Link
            to="/login"
            className="block py-2 px-3 text-white hover:text-primary bg-primary hover:bg-white border border-primary font-bold rounded-lg text-base text-center"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="block py-2 px-3 text-primary hover:text-white bg-white hover:bg-primary border border-primary font-bold rounded-lg text-base text-center"
          >
            Register
          </Link>
        </li>
      </div>
    </ul>
  ) : null;

  return <HeaderWrapper left={left} right={right} menu={menu} />;
}
