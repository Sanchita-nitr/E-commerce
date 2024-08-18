"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex md:gap-8 gap-4 lg:justify-center lg:px-0 px-7  my-8 md:text-base text-xs font-serif md:whitespace-nowrap overflow-x-auto md:scrollbar-hide md:flex-nowrap">
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          HOME
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          MEN
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          CATEGORIES
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          WOMEN
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          KIDS
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          BEAUTY
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          GADGETS
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          LUGGAGE
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          JEWELLERY
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          PERFUME
        </Link>
        <Link
          className="navbar relative border-[0.5px] border-gray-400 p-1 rounded-lg"
          href={"#"}
        >
          FOOTWEAR
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
