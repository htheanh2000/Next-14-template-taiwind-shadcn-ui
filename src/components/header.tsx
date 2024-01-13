import React from "react";
import { Button } from "./ui/button";
import Logo from "./ui/logo";
import Link from "next/link";
import Icon from "./ui/icon";

const LINKS = [
  {
    name: "Home",
    href: "#Home",
    current: true,
  },
  {
    name: "Company",
    href: "#Company",
    current: false,
  },
  {
    name: "Marketplace",
    href: "#Marketplace",
    current: false,
  },
  {
    name: "Features",
    href: "#Features",
    current: false,
  },
  {
    name: "Team",
    href: "#Team",
    current: false,
  },
  {
    name: "Contact",
    href: "#Contact",
    current: false,
  },
];

const Header: React.FC = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo />
          <div className="flex items-center lg:order-2">
            <Button variant="outline" className="hidden mr-4 lg:inline-block">
              Login
            </Button>
            <Button className="hidden lg:inline-block">Sign Up</Button>

            <Link
              href="/login"
              className="bg-black p-2 rounded-md m-0 inline-block lg:hidden"
            >
              <Icon size={20} name="icon-open" />
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 pl-3 pr-4 text-primary bg-primary rounded lg:bg-transparent lg:text-primary lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
