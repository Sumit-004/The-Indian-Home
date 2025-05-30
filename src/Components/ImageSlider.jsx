<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../assets/slide1.jpg';
import img4 from '../assets/homeimage.webp';
import img5 from '../assets/photo-1617784625140-515e220ba148.jpg';

const images = [img1, img4, img5];
=======
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
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

<<<<<<< HEAD
  const startAutoPlay = useCallback(() => {
    stopAutoPlay(); // Clear previous interval first
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);
=======
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => clearInterval(intervalRef.current);
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
<<<<<<< HEAD
  }, [startAutoPlay, stopAutoPlay]);

  const goToPrevious = () => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  const goToSlide = index => {
    setCurrent(index);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center my-10"
=======
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
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slider Container */}
<<<<<<< HEAD
      <div className="relative w-[92vw] max-w-[1500px] md:h-[500px] h-[300px] overflow-hidden rounded-xl shadow-lg bg-black">
        {/* Image Slides */}
=======
      <div className="relative w-[92vw] max-w-[1150px] h-[400px]  overflow-hidden rounded-xl shadow-lg bg-black">
        {/* Images Track */}
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
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
<<<<<<< HEAD
              className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black"
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-fill"
=======
              className="w-full h-full  flex items-center justify-center bg-black"
            >
              <img
                src={img.img}
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-cover"
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
                loading="lazy"
              />
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
=======
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>
<<<<<<< HEAD
        <button
          onClick={goToNext}
=======

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

<<<<<<< HEAD
      {/* Slide Indicators */}
=======
      {/* Line Indicators */}
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
      <div className="mt-4 flex gap-3 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
<<<<<<< HEAD
            onClick={() => goToSlide(index)}
=======
            onClick={() => setCurrent(index)}
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
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
