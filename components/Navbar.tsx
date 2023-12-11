import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#02A28F] ">
      <div className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <span className="text-white font-bold text-[36px]">Kang Tutor</span>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((menu) => (
            <Link
              href={menu.href}
              key={menu.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {menu.label}
            </Link>
          ))}
        </ul>

        <Image
          src="menu.svg"
          alt="menu"
          width={35}
          height={23}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
