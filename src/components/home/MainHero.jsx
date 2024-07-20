import { useState, useEffect } from "react";
import { aboutUs, officeSpace2, homela} from "../../assets";

const MainHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [aboutUs, officeSpace2, homela, officeSpace2];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slides = [
    { image: data[0], text: "Your Trusted Experts in Identity & ICT Solutions" },
    { image: data[1], text: "Cutting-Edge Tech for Public & Private Sectors" },
    { image: data[2], text: "Dedicated to Excellence in Identity & ICT" },
    { image: data[3], text: "Expert Tech Solutions for Secure Identification" },
  ];

  const duplicatedSlides = slides.concat(slides);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Reset slide index when it reaches the end of the first set
  useEffect(() => {
    if (currentSlide === slides.length) {
      const timeoutId = setTimeout(() => {
        setCurrentSlide(0);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="overflow-y-hidden w-full h-auto overflow-x-hidden bg-[#edebe8] md:-translate-y-[45%]">
      <div className="w-screen relative">
        <div
          style={{
            transform: `translateX(-${(currentSlide % slides.length) * 100}vw)`,
            transition: currentSlide === slides.length ? "none" : "transform 1s ease",
          }}
          className="w-fit h-full flex transition-transform duration-1000 flex-1 relative ease-out" >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="relative w-screen flex items-center justify-center" >
              <img
                className="w-screen"
                src={slide.image}
                alt={`img-${index}`}
              />
              <div className="absolute z-30 flex flex-col items-center justify-center md:translate-y-[400%] text-center md:transform">
                <p className={`text-white font-bold text-xl md:text-5xl text-shadow-xl transform animate-slide-up`}
                  key={`${index}-${currentSlide}`} >
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
          @keyframes slide-up{
            from{
            transform: translateY(100%);
            opacity: 0
            }
             to{
            transform: translateY(0%);
              opacity: 1
            }
          }
          .animate-slide-up {
          animation: slide-up 2s ease-out;
        }
        `}
        </style>
      </div>

    </div>
  );
};
export default MainHero;