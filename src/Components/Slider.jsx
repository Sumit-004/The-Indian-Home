import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import img1 from '../assets/img2.png'
import img2 from '../assets/slide1.jpg'
import img3 from '../assets/img3.png'


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Elegant Ceramic Dinnerware",
      description: "Premium quality ceramic plates and bowls for your dining table",
      image: img1,
      category: "Dinnerware"
    },
    {
      id: 2,
      title: "Artistic Coffee Mugs",
      description: "Handcrafted mugs with unique designs for your morning coffee",
      image:img2,
      category: "Cups & Mugs"
    },
    {
      id: 3,
      title: "Modern Home Decor",
      description: "Contemporary vases and decorative pieces for your living space",
      image:img3,
      category: "Home Decor"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-96 md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-opacity-30 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute z-20 text-red-800 p-6 md:p-12 max-w-md md:max-w-xl">
              <span className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                {slide.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
              <p className="text-lg mb-6 font-semibold">{slide.description}</p>
              <button className="bg-black text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full z-30 hover:bg-opacity-100 transition"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full z-30 hover:bg-opacity-100 transition"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Slider;