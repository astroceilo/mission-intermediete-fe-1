import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, } from "flowbite-react";
import { Link } from "react-router-dom";

import { generalMenuItems } from "./HeaderMenuItems";
import logo from "../../assets/images/logo.png";


export default function Header() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Videobelajar Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {generalMenuItems.map((item) => (
          <NavbarLink key={item.name} as={Link} href={item.href}>
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
