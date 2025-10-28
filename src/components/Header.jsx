import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-30">
      <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-16 md:py-3 xl:px-[120px]">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a
              className="cursor-pointer block text-teal-600 dark:text-teal-300"
              href="/"
            >
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Videobelajar Logo"
                className="w-[152px] h-[42px] md:w-[237px] md:h-14 object-contain"
              />
            </a>
          </div>
          {/* End Logo */}

          <div className="sm:flex sm:items-center sm:gap-6">
            {/* Menu Item */}
            <nav aria-label="Global" className="hidden sm:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-text-dark-secondary hover:text-text-dark-primary font-medium text-base transition-colors duration-300"
                    href="#categories"
                  >
                    Kategori
                  </a>
                </li>
              </ul>
            </nav>
            {/* End Menu Item */}

            <div className="flex items-center gap-4">
              {/* Login & Register */}
              <div id="guest-nav" className="hidden sm:flex sm:gap-4">
                <a
                  className="px-5 py-2.5 rounded-[10px] flex justify-center items-center text-base font-bold text-white hover:text-primary bg-primary hover:bg-primary-100 border border-primary hover:border-primary-100 transition-colors duration-300"
                  href="../pages/auth/login.html"
                >
                  Login
                </a>
                <a
                  className="px-5 py-2.5 rounded-[10px] flex justify-center items-center text-base font-bold text-primary hover:text-white bg-white hover:bg-primary border border-primary transition-colors duration-300"
                  href="../pages/auth/register.html"
                >
                  Register
                </a>
              </div>
              {/* End Login & Register */}
            </div>
          </div>

          {/* Hamburger */}
          <div>
            <button
              id="hamburger-btn"
              className="sm:hidden w-10 h-10 flex items-center justify-center"
            >
              {/* Icon Hamburger */}
              <svg
                id="icon-hamburger"
                className="w-8 h-8 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              {/* Icon X */}
              <svg
                id="icon-close"
                className="w-8 h-8 text-gray-800 hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              className="absolute top-full left-0 right-0 z-20 bg-white/80 backdrop-blur-md flex flex-col px-6 py-4 transform -translate-y-full opacity-0 pointer-events-none transition-all duration-500 ease-in-out sm:hidden shadow-md"
            >
              {/* Nav Item */}
              <ul className="flex flex-col gap-6 text-lg font-medium">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[rgba(62,207,76,1)]"
                  >
                    Kategori
                  </a>
                </li>
              </ul>
              {/* End Nav Item */}

              {/* Buttons */}
              <div className="flex gap-4 mt-8 w-full">
                <a
                  className="flex-1 rounded-xl bg-[rgba(62,207,76,1)] px-4 py-3 text-center text-white hover:bg-green-600"
                  href="../pages/auth/login.html"
                >
                  Login
                </a>
                <a
                  className="flex-1 rounded-xl border border-[rgba(62,207,76,1)] px-4 py-3 text-center text-[rgba(62,207,76,1)] hover:bg-[rgba(62,207,76,1)] hover:text-white"
                  href="../pages/auth/register.html"
                >
                  Register
                </a>
              </div>
              {/* End Buttons */}
            </div>
            {/* End Mobile Menu */}
          </div>
          {/* End Hamburger */}
        </div>
      </div>
    </header>
  );
}
