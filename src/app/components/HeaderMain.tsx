import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";

const HeaderMain = () => {
    return (
        <div className="flex border-gray-300 border-b-[0.5px] md:p-0 p-2 justify-between items-center overflow-hidden">
            <div className=" lg:text-3xl md:text-2xl font-serif md:block hidden  md:pl-10 md:p-3  ">Silk City</div>
            <div className="flex md:ml-0 ml-3 text-center border-[0.5px] justify-between items-center rounded-xl border-pink-300 shadow-md">
                <input
                    className=" lg:w-[40rem] md:w-[20rem] w-[10rem] rounded-xl lg:flex md:flex md:p-2 p-1"
                    type="text"
                    placeholder="Search here..."
                />
                <div className=" lg:p-3 md:p-3 p-1 rounded-md text-pink-500 hover:cursor-pointer">
                    <FaSearch />
                </div>
            </div>
            <div className="flex lg:gap-5 md:gap-5 gap-2 ml-4 mr-10 lg:text-2xl md:text-2xl text-lg hover:cursor-pointer  ">
            <div className="">
            <FaRegUser />
            </div>
            <div className="" >
            <FiHeart />
            </div>
            <div className="relative">
            <RiShoppingBagLine />
            <div className="absolute top-[-10px] right-[-9px] pr-1 pl-1 text-sm rounded-full bg-pink-600 text-white font-serif grid place-items-center">2</div>
            </div>
            </div>
            
        </div>
        
    );
};

export default HeaderMain;
