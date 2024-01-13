import Link from "next/link";
import React from "react";
import Image from "@/components/ui/image"
import { cn } from "@/lib/utils";
interface LogoProps {
  className?: string;
  textCn?: string
}

const Logo: React.FC<LogoProps> = ({ className,textCn }) => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.svg"
        className={cn("max-w-12 h-16 mr-3 sm:max-w-16", className)} 
        layout="responsive"
        alt="Logo"
      />
      <span className={cn("hidden sm:inline-block self-center text-md font-semibold whitespace-nowrap dark:text-white",textCn)}>
        Ielts4Prep
      </span>
    </Link>
  );
};

export default Logo;
