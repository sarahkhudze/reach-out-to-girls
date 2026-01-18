import FacebookFeed from "../FacebookFeed";

// Floating particles for subtle magic
const particles = Array.from({ length: 30 }).map((_, i) => {
  const size = Math.random() * 1.2 + 0.5;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const opacity = Math.random() * 0.3 + 0.1;
  const color = Math.random() > 0.6 ? "#FFBE0B" : "#65a7b2";

  return (
    <div
      key={i}
      className="absolute rounded-full animate-float-particle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity: opacity,
        top: `${posY}%`,
        left: `${posX}%`,
        animationDuration: `${15 + Math.random() * 20}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  );
});

const BFooterHome = () => {
  return (
    <div
      id="contact"
      className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles}
      </div>
      <div
        className="absolute -top-1/3 -right-1/4 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #292496 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FFBE0B 0%, transparent 70%)",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-40">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="text-[#292496] text-sm font-semibold tracking-wider uppercase">
                {" "}
                Let`s Connect
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{
                fontWeight: 700,
                color: "#292496",
                letterSpacing: "0.02em",
              }}
            >
              Reach Out to Us
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 max-w-lg">
              Whether you’re a potential partner, donor, volunteer, or simply
              inspired by our mission — we’d love to hear from you. Every
              message brings us closer to a world where every girl thrives.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#292496] text-white font-medium rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 group"
            >
              <span>Send a Message</span>
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div className="lg:w-1/2 flex justify-center px-4 sm:px-6">
            <div className="w-full max-w-md overflow-hidden border-2 border-gray-200 rounded-lg shadow-lg bg-white">
              <div className="py-4 px-4">
                {" "}
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Facebook Updates
                </h2>
                <FacebookFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BFooterHome;
