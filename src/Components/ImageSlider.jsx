import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img4 from '../assets/homeimage.webp';
import img5 from '../assets/photo-1617784625140-515e220ba148.jpg';
import img1 from '../assets/slide1.jpg';

const images = [
  { img: img1 },
  { img: img4 },
  { img: img5 },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center mt-6"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slider Container */}
      <div className="relative w-[92vw] max-w-[1150px] h-[400px]  overflow-hidden rounded-xl shadow-lg bg-black">
        {/* Images Track */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-full  flex items-center justify-center bg-black"
            >
              <img
                src={img.img}
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Line Indicators */}
      <div className="mt-4 flex gap-3 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 h-[3px] rounded-full ${
              current === index ? 'w-10 bg-black' : 'w-6 bg-gray-400 opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
