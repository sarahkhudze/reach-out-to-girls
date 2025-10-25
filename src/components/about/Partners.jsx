import {
  sala1,
  sala10,
  sala14,
  sala15,
  sala2,
  sala3,
  sala7,
  sala8,
  sala9,
} from "../../assets";

const partners1 = [
  { logo: sala1, alt: "msImg" },
  { logo: sala2, alt: "msImg" },
  { logo: sala3, alt: "n_logo" },
  { logo: sala7, alt: "n_logo" },
  { logo: sala8, alt: "n_logo" },
  { logo: sala9, alt: "n_logo" },
  { logo: sala10, alt: "msImg" },
  { logo: sala14, alt: "n_logo" },
  { logo: sala15, alt: "msImg" },
];

const Partners = () => {
  return (
    <div className="mb-12 text-center overflow-hidden pt-28 md:pt-32 lg:pt-40">
      <div className="flex flex-col items-center justify-center align-middle gap-3 ml-[6%] md:ml-[0%] mr-[4%] md:mr-[0%] mb-20">
        <div className="mt-2 text-3xl md:text-4xl font-bold text-[#E8B504]">
          Featured Events and Works
        </div>
        <span className="text-xl md:text-2xl text-justify md:w-[55%]">
          To deliver exceptional results for you, we forge powerful alliances.
          By collaborating with premier specialists, we enhance our service and
          product portfolio, ensuring you get innovative, battle-tested
          solutions that drive growth
        </span>
        <div className="w-full mt-8 text-center overflow-hidden relative">
          <div className="marquee">
            <div className="marquee-content">
              {partners1.concat(partners1).map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center mx-4 md:mx-6"
                >
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-60 lg:h-96 w-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .marquee {
            display: flex;
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          .marquee-content {
            display: flex;
            animation: marquee 40s linear infinite;
            min-width: max-content;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }
        `}
      </style>
    </div>
  );
};

export default Partners;