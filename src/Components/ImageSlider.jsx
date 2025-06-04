import React, { useState, useEffect, useCallback } from 'react';

// Main App component for the ceramic items slider
function ImageSlider() {
  // Initial data for slides, including prompts for image generation
  const initialSlidesData = [
    { title: "Elegant Ceramic Vases", description: "Hand-crafted ceramic vases for a touch of sophistication.", prompt: "elegant ceramic vase, minimalist design, natural light, studio photography, high resolution" },
    { title: "Chic Home Decor Figurines", description: "Unique figurines to add character and charm to your living space.", prompt: "chic home decor figurine, abstract art, modern interior, soft lighting, high resolution" },
    { title: "Artisan Coffee Mugs", description: "Start your day with these beautifully designed, comfortable-to-hold mugs.", prompt: "artisan ceramic coffee mug, rustic texture, warm beverage, cozy setting, high resolution" },
    { title: "Modern Kitchenware Set", description: "Complete your kitchen with a sleek and functional set of ceramic kitchenware.", prompt: "modern ceramic kitchenware set, minimalist kitchen, clean lines, bright lighting, high resolution" }
  ];

  // State to hold the current index of the active slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to hold the slide data, including generated image URLs
  const [slides, setSlides] = useState(initialSlidesData);
  // State to indicate if images are currently being loaded/generated
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  // State to manage potential errors during image generation
  const [error, setError] = useState(null);

  // Function to navigate to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]); // Dependency on slides.length ensures it updates if slides array changes

  // Function to navigate to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]); // Dependency on slides.length ensures it updates if slides array changes

  // Effect hook to generate images when the component mounts
  useEffect(() => {
    const generateAllImages = async () => {
      setIsLoadingImages(true); // Set loading to true at the start
      setError(null); // Clear any previous errors
      const newSlides = [...initialSlidesData]; // Create a mutable copy of initial data

      for (let i = 0; i < newSlides.length; i++) {
        try {
          // Payload for the image generation API call
          const payload = { instances: { prompt: newSlides[i].prompt }, parameters: { "sampleCount": 1 } };
          const apiKey = ""; // API key will be provided by the Canvas environment
          const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

          // Fetch call to the image generation API
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          // Check if the response was successful
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error.message}`);
          }

          const result = await response.json();

          // Extract the base64 encoded image data
          if (result.predictions && result.predictions.length > 0 && result.predictions[0].bytesBase64Encoded) {
            newSlides[i].imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
          } else {
            // Fallback image if generation fails or response structure is unexpected
            console.warn("Image generation failed or returned unexpected structure for:", newSlides[i].title, result);
            newSlides[i].imageUrl = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Unavailable";
          }
        } catch (err) {
          console.error("Error generating image for:", newSlides[i].title, err);
          setError("Failed to load some images. Please try again later.");
          newSlides[i].imageUrl = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Error"; // Fallback on error
        }
        // Update state after each image generation to show progress (optional, but good for UX)
        setSlides([...newSlides]);
      }
      setIsLoadingImages(false); // Set loading to false once all images are processed
    };

    generateAllImages(); // Call the async function
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Effect hook for auto-playing the slider
  useEffect(() => {
    // Set an interval to automatically advance slides every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [nextSlide]); // Dependency on nextSlide ensures the interval is reset if nextSlide's reference changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
        {isLoadingImages ? (
          // Loading state display
          <div className="flex flex-col items-center justify-center w-full h-96 p-8 text-gray-600">
            <svg className="animate-spin h-10 w-10 text-indigo-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-semibold">Generating beautiful ceramic images...</p>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
        ) : (
          // Slider content once images are loaded
          <>
            {/* Image section (left on desktop, top on mobile) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
              <img
                src={slides[currentSlide].imageUrl}
                alt={slides[currentSlide].title}
                className="w-full h-auto object-cover rounded-xl shadow-md transition-opacity duration-500 ease-in-out"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error"; }}
              />
            </div>

            {/* Text content and navigation (right on desktop, bottom on mobile) */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Slide indicators (dots) */}
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 w-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-indigo-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
