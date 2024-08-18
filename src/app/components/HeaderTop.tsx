import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const HeaderTop = () => {
    return (
        <>
            <div className="mt-10">
                <div className="border-t-[0.5px] border-b-[0.5px] border-gray-300 p-3">
                    <div className="flex">
                        <div className="lg:flex md:flex hidden">
                            <div className=" icon ">
                                <FaSquareInstagram />
                            </div>
                            <div className=" icon">
                                <BsTwitterX />
                            </div>
                            <div className=" icon">
                                <FaLinkedin />
                            </div>
                        </div>

                        <div className="md:flex ml-auto mr-10 grid grid-cols-2">
                            <select
                                className=" hover:cursor-pointer"
                                name="currency"
                                id="currency"
                            >
                                <option value="INR">INR</option>
                                <option value="USD $">USD $</option>
                                <option value="EUR €">EUR €</option>
                            </select>

                            <select
                                className="ml-5 hover:cursor-pointer"
                                name="language"
                                id="language"
                            >
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;
