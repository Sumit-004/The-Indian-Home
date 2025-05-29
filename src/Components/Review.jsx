import React, { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    author: "Alice",
    text: "Amazing product! Highly recommend.",
    rating: 5,
  },
  {
    id: 2,
    author: "Bob",
    text: "Good quality and fast delivery.",
    rating: 4,
  },
  {
    id: 3,
    author: "Carol",
    text: "Customer service was very helpful.",
    rating: 4,
  },
  {
    id: 4,
    author: "David",
    text: "Will buy again for sure!",
    rating: 5,
  },
  {
    id: 5,
    author: "Eva",
    text: "Exceeded my expectations!",
    rating: 5,
  },
];

function StarRating({ rating }) {
  const totalStars = 5;
  return (
    <div className="text-yellow-400 text-lg select-none">
      {[...Array(totalStars)].map((_, i) =>
        i < rating ? "★" : "☆"
      )}
    </div>
  );
}

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (containerRef.current) {
      // Calculate translateX so the center card is fully visible and side cards peek out
      // Each card is 300px wide + margin 16px (8px each side)
      // We center the current card by shifting container left by (cardWidth + margin) * currentIndex - offset to center
      const cardWidth = 300 + 16;
      const containerWidth = containerRef.current.parentElement.offsetWidth;
      const centerOffset = (containerWidth - 300) / 2; // 300 is card width
      const translateX = -(cardWidth * currentIndex) + centerOffset;

      containerRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>

      <div className="relative overflow-hidden">
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
                className={`flex-shrink-0 w-[300px] p-6 border rounded-lg bg-white shadow-md
                  transition-all duration-500
                  ${isCenter ? "scale-100 blur-0 opacity-100 z-10" : "scale-90 blur-sm opacity-60 z-0"}`}
                style={{ minWidth: "300px" }}
              >
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <StarRating rating={review.rating} />
                <p className="mt-4 font-semibold text-right">- {review.author}</p>
              </div>
            );
          })}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Review"
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 focus:outline-none"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Review"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 focus:outline-none"
        >
          &#10095;
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to review ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === idx ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
