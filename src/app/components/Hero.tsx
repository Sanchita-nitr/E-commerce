"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/Fashion.jpg",
      title: "Trending Item",
      mainTitle: "LATEST FASHION SALE",
      price: "",
    },
    {
      id: 1,
      img: "/luxury-branding-strategy.jpg",
      title: "Trending Accessories",
      mainTitle: "ENCHANTING FRAGRANCES",
      price: "",
    },
    {
      id: 2,
      img: "/Sale.jpg",
      title: "Sale Offer",
      mainTitle: "SUPER SAVER SALE",
      price: "",
    },
    {
      id: 3,
      img: "/SunglassesHut.jpg",
      title: "Sun Glasses",
      mainTitle: "MODERN SUNGLASSES",
      price: "",
    }, {
      id: 4,
      img: "/Makeup.jpg",
      title: "beauty",
      mainTitle: "Beauty",
      price: "",
    },

  ];
  return (
    <div className="flex justify-center">
      <div className="container">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide 
            key={item.id}
            img={item.img}
             title={item.title} 
             mainTitle={item.mainTitle} 
             price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
