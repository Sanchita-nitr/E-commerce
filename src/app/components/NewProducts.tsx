import React from "react";
import ProductCard from "./ProductCard";

// src/data/products.js
export const products = [
    {
        id: 1,
        img: "/jacket.jpg",
        title: "Stylish Jacket",
        description: "A trendy jacket perfect for winter outings.",
        rating: 4,
        price: "79.00",
    },
    {
        id: 2,
        img: "/elegant dress.png.webp",
        title: "Elegant Dress",
        description: "An elegant dress ideal for evening parties.",
        rating: 5,
        price: "59.79",
    },
    {
        id: 3,
        img: "/SunGlass.jpeg",
        title: "Sunglasses",
        description: "Stylish sunglasses for the perfect summer look.",
        rating: 4,
        price: "29.94",
    },
    {
        id: 4,
        img: "/Beauty.jpg",
        title: "Beauty Products",
        description: "Top quality beauty products for your skincare routine.",
        rating: 4,
        price: "24.75",
    },
    {
        id: 5,
        img: "/makeupKit.jpg",
        title: "Makeup Kit",
        description: "A complete makeup kit for a flawless look.",
        rating: 3,
        price: "49.72",
    },
    {
        id: 6,
        img: "/casualShoe.jpg",
        title: "Casual Shoes",
        description: "Comfortable and stylish shoes for everyday wear.",
        rating: 4,
        price: " 39.00",
    },

    {
        id: 7,
        img: "/heels.jpg.webp",
        title: "Heels",
        description: "Elegant heels to elevate your style.",
        rating: 4,
        price: "54.80",
    },
    {
        id: 8,
        img: "/jewllery.jpg",
        title: "Jewellery Set",
        description: "A beautiful jewellery set for any occasion.",
        rating: 5,
        price: "90.10",
    },
    {
        id: 9,
        img: "/Headphone.jpg",
        title: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        rating: 5,
        price: "129.30",
    },
    {
        id: 10,
        img: "/kidsToy.webp",
        title: "Kids Toy Set",
        description: "n educational and fun toy set for kids aged 3-7.",
        rating: 4,
        price: "34.50",
    },
];

const NewProducts = () => {
    return (
        <div className="flex justify-items-center justify-center items-center">
            <div className="container">
                <h2 className="font-medium text-2xl pt-6">New Products</h2>
                <div className="flex justify-center items-center justify-items-center">
                    <div className="grid grid-cols-1 sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
                        {products.map((item, index) => (
                            <ProductCard
                                key={index}
                                img={item.img}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
