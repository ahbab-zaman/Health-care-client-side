import { useEffect, useState } from "react";

// Define all slides
import banner1 from "../../assets/medi-1.jpg";
import banner2 from "../../assets/medi-2.jpg";
import banner3 from "../../assets/medi-3.webp";
import { Link } from "react-router-dom";
const slides = [
  {
    id: 1,
    image: banner1,
    title: "Compassionate Care, Advanced Healing",
    subtitle:
      "Dedicated to delivering the best healthcare experience, one patient at a time.",
  },
  {
    id: 2,
    image: banner2,
    title: "Your Health, Our Mission",
    subtitle: "Trusted professionals working together to keep you well.",
  },
  {
    id: 3,
    image: banner3,
    title: "Wellness Begins Here",
    subtitle: "Discover a new approach to health and wellbeing.",
  },
];

// Effect style mapping
const effectClasses = {
  fadeZoom: (isActive) =>
    `transition-all duration-1000 ease-in-out transform ${
      isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
    }`,
  slideRight: (isActive) =>
    `transition-all duration-1000 ease-in-out transform ${
      isActive
        ? "translate-x-0 opacity-100 z-10"
        : "translate-x-full opacity-0 z-0"
    }`,
  slideLeft: (isActive) =>
    `transition-all duration-1000 ease-in-out transform ${
      isActive
        ? "translate-x-0 opacity-100 z-10"
        : "-translate-x-full opacity-0 z-0"
    }`,
  slideUp: (isActive) =>
    `transition-all duration-1000 ease-in-out transform ${
      isActive
        ? "translate-y-0 opacity-100 z-10"
        : "translate-y-full opacity-0 z-0"
    }`,
  blurFade: (isActive) =>
    `transition-all duration-1000 ease-in-out transform ${
      isActive
        ? "opacity-100 blur-0 scale-100 z-10"
        : "opacity-0 blur-sm scale-105 z-0"
    }`,
};

const HeroSlider = ({ transitionEffect = "fadeZoom" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${effectClasses[
            transitionEffect
          ](index === currentIndex)}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 flex flex-col gap-2 items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl sm:text-5xl font-bold mb-3 animate-fade-slide-in">
              {slide.title}
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-2xl">
              {slide.subtitle}
            </p>
            <Link><button className="px-4 py-2 rounded-lg text-[#000] font-semibold bg-base-100">Buy Now</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
