import React, { useState, useEffect } from 'react';
import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide2.jpg';
import img3 from '../assets/slide3.avif';
// import img4 from '../assets/slide4.webp';

const images = [
  {img: img1},
  {img: img2},
  {img: img3},
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' flex items-center justify-center'>
    <div className="relative w-[95%] overflow-hidden rounded-2xl shadow-lg mb-20">
      <div className="h-[450px] flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)`, width: `${images.length * 100}%` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.img}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
