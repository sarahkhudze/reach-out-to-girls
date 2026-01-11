
import {
  new10,
  new15,
  new16,
  new3,
  new7,
  reach1,
  reach10,
  reach14,
  reach19,
  reach2,
  reach4,
  reach6,
  reach7,
  reach8,
} from "../../assets";

// All your highlight images
const highlights = [
  { img: reach1, alt: "Girls in ICT workshop" },
  { img: new10, alt: "Scholarship award ceremony" },
  { img: reach8, alt: "Health education session" },
  { img: new16, alt: "STEM activity day" },
  { img: reach14, alt: "Mentorship circle" },
  { img: new15, alt: "Community outreach" },
  { img: new3, alt: "Digital literacy training" },
  { img: new7, alt: "Leadership camp" },
  { img: reach19, alt: "University admission celebration" },
  { img: reach7, alt: "Coding club" },
  { img: reach6, alt: "Women empowerment forum" },
  { img: reach4, alt: "Rural school visit" },
  { img: reach2, alt: "Graduation day" },
  { img: reach10, alt: "Tech demo by girls" },
];

const Partners = () => {
  return (
    <div className="mb-16 md:mb-24 pt-24 md:pt-16 lg:pt-20 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #292496 2px, transparent 3px),
            radial-gradient(circle at 90% 80%, #65a7b2 2px, transparent 3px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="text-center px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        {/* Handwritten Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide drop-shadow-sm mb-8"
          style={{
            fontWeight: 700,
            color: "#292496",
            letterSpacing: "0.02em",
          }}
        >
          Highlights
        </h2>
        <div className="w-20 h-1 bg-[#65a7b2] -translate-y-3 mx-auto rounded-full mb-10"></div>

        {/* Mission-focused description */}
        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
          From rural classrooms to university campuses, these are the moments that fuel our mission — 
          where curiosity meets opportunity, and every girl steps into her power.
        </p>
      </div>

      {/* Marquee of Highlight Photos */}
      <div className="w-full mt-12 px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-[#292496]/10 shadow-lg py-6">
          <div className="flex animate-marquee">
            {/* Show all images twice for seamless loop */}
            {[...highlights, ...highlights].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-3 md:mx-4 flex items-center justify-center"
              >
                <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-72 w-72 md:h-80 md:w-80 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partners;