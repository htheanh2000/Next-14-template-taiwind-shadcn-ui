import Link from "next/link";
import React from "react";
import Image from "@/components/ui/image"
const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.svg"
        className=" max-w-12 h-16 mr-3 sm:max-w-16"
        layout="responsive"
        alt="Logo"
      />
      <span className="hidden sm:inline-block self-center text-md font-semibold whitespace-nowrap dark:text-white">
        Ielts4Prep
      </span>
    </Link>
  );
};

export default Logo;
