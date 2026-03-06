import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HeroSlider() {

  const slides = [
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=1600",
    "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1600",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600",
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);

  });

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (

    <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">

      {/* Slides */}

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {slides.map((img, index) => (

          <img
            key={index}
            src={img}
            className="w-full flex-shrink-0 object-cover"
          />

        ))}

      </div>

      {/* Left Button */}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

        {slides.map((_, i) => (

          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          />

        ))}

      </div>

    </div>

  );

}

export default HeroSlider;