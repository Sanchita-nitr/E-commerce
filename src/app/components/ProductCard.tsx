import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
    img: string;
    title: string;
    description: string;
    rating: number;
    price: string;
}
const ProductCard: React.FC<propsType> = ({
    img,
    title,
    description,
    rating,
    price,
}) => {
    const generateRating = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 3:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 4:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
            case 5:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            default:
                return null;
        }
    }
    return (
        <div className=" border border-gray-200 rounded-2xl max-w-[400px]">
            <div className="">
                <Image
                    className="w-[300px] h-[300px] rounded-2xl "
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                />
            </div>

            <div className=" space-y-2 py-2 grid items-start justify-center ">
                <h2 className="text-pink-700 font-semibold uppercase">{title}</h2>
                <p className="text-gray-500 max-w-[250px] font-serif">{description}</p>
                <div>{generateRating(rating)}</div>
                <div className="font-bold flex gap-4">${price}</div>
                <del>${parseFloat(price) + parseInt(price) * 0.3}</del>

            </div>
        </div>
    );
};

export default ProductCard;
