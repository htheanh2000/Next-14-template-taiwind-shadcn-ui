import React from "react";
import { FOOTERS, LOGO_CONTENTS } from "@/constant/homepage";
import Link from "next/link";
import Logo from "./ui/logo";
import Icon from "./ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {FOOTERS.map((row, index) => (
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {row.title}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {row.description.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link href={item.href} className=" hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <div className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <Logo />
          </div>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2023-2024 Ielts4Prep™. All Rights Reserved. 
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {LOGO_CONTENTS.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                    <Icon className="w-5 h-5" size={24} name={item}/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
