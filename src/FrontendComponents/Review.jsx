import React, { useState, useEffect, useRef } from "react";

const reviews = [
  { id: 1, author: "Shivank Verma", text: "Amazing product! Highly recommend.", rating: 5 },
  { id: 2, author: "Ankit Rathi", text: "Good quality and fast delivery.", rating: 4 },
  { id: 3, author: "Digvesh", text: "Customer service was very helpful.", rating: 4 },
  { id: 4, author: "Kartik Yadav", text: "Will buy again for sure!", rating: 5 },
  { id: 5, author: "Rajat Sharma", text: "Exceeded my expectations!", rating: 5 },
];

function StarRating({ rating }) {
  const totalStars = 5;
  return (
    <div className="text-yellow-400 text-base sm:text-lg select-none">
      {[...Array(totalStars)].map((_, i) => (i < rating ? "★" : "☆"))}
    </div>
  );
}

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-play logic
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 2500);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [currentIndex]);

  // Slide transition
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 320 : window.innerWidth >= 640 ? 300 : 260;
      const margin = 16;
      const totalWidth = cardWidth + margin;
      const containerWidth = containerRef.current.parentElement.offsetWidth;
      const centerOffset = (containerWidth - cardWidth) / 2;
      const translateX = -(totalWidth * currentIndex) + centerOffset;

      containerRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex]);

  // Swipe gesture support
  useEffect(() => {
    const slider = sliderRef.current;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;

      if (diff > 50) {
        nextSlide(); // swipe left
      } else if (diff < -50) {
        prevSlide(); // swipe right
      }
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className='md:mt-12 mt-8 mb-2 flex items-center justify-center gap-2'>
        <p className='w-8 h-[2px] bg-black'></p>
        <p className='prata-regular md:text-5xl text-2xl text-gray-600 font-semibold'><span className='text-black'>Customer</span> Review</p>
      </div>
      <div
        className="relative overflow-hidden"
        ref={sliderRef}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out cursor-grab select-none"
          style={{ gap: "16px" }}
        >
          {reviews.map((review, idx) => {
            const isCenter = idx === currentIndex;
            return (
              <div
                key={review.id}
                className={`flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] p-6 sm:p-8 md:p-10 border rounded-lg bg-white shadow-md
                transition-all duration-500
                ${isCenter ? "scale-100 blur-0 opacity-100 z-10" : "scale-90 blur-sm opacity-60 z-0"}`}
                style={{
                  minWidth:
                    window.innerWidth >= 768
                      ? "320px"
                      : window.innerWidth >= 640
                        ? "300px"
                        : "260px",
                }}
              >
                <p className="text-gray-700 mb-4 text-sm sm:text-base">"{review.text}"</p>
                <StarRating rating={review.rating} />
                <p className="mt-4 font-semibold text-right text-sm sm:text-base">- {review.author}</p>
              </div>
            );
          })}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Review"
          className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 bg-black text-white rounded-full w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 focus:outline-none"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Review"
          className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 bg-black text-white rounded-full w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 focus:outline-none"
        >
          &#10095;
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2 sm:space-x-3">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to review ${idx + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${currentIndex === idx ? "bg-black" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
