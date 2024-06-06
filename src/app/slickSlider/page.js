"use client"
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import img1 from '../../../public/images/Banner1.png';
import img2 from '../../../public/images/Banner2.png';
import img3 from '../../../public/images/Banner3.png';
import img4 from '../../../public/images/Banner4.png';
import img5 from '../../../public/images/Banner5.png';
import img6 from '../../../public/images/Banner6.png';

const SlickSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };

  return (
    <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto pt-[105px]'>
      <div className='bg-darkgreey px-[20px] pt-[15px] '>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div >
                  <Image src={image}  alt={`Image ${index + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
