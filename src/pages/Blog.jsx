/* eslint-disable react/no-unknown-property */

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#faf9f7] flex items-center justify-center relative overflow-hidden px-4">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #292496 1px, transparent 2px),
            radial-gradient(circle at 90% 80%, #65a7b2 1px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 drop-shadow-sm"
          style={{
            fontWeight: 700,
            color: "#292496",
            letterSpacing: "0.02em",
          }}
        >
          Blog
        </h1>

        <div className="text-2xl md:text-3xl text-gray-700 mb-12">
          Coming Soon
        </div>

        <div className="mx-auto w-64 h-64 md:w-80 md:h-80 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-float-slow">
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
              <path
                d="M10 10H50V40H10V10Z"
                stroke="#292496"
                strokeWidth="2"
                fill="#ffffff"
              />
              <path d="M15 15H45" stroke="#65a7b2" strokeWidth="1.5" />
              <path d="M15 20H40" stroke="#65a7b2" strokeWidth="1.5" />
              <path d="M15 25H35" stroke="#65a7b2" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-10 animate-float-medium">
            <svg width="30" height="60" viewBox="0 0 30 60" fill="none">
              <path d="M15 5L20 15L15 55L10 15L15 5Z" fill="#FFBE0B" />
              <path
                d="M15 5L20 15L15 55L10 15L15 5Z"
                stroke="#292496"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="absolute top-1/3 right-0 animate-float-fast">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#65a7b2">
              <path d="M12 .587l3.668 7.568 8.332 1.197-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.197z" />
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 animate-float-slow">
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <circle cx="20" cy="15" r="10" fill="#292496" />
              <rect
                x="10"
                y="25"
                width="20"
                height="30"
                rx="5"
                fill="#292496"
              />
              <rect x="5" y="35" width="10" height="20" rx="3" fill="#292496" />
              <rect
                x="25"
                y="35"
                width="10"
                height="20"
                rx="3"
                fill="#292496"
              />
            </svg>
          </div>
        </div>

        <p className="mt-12 text-gray-600 max-w-md mx-auto text-center">
          Stories of hope and the girls who inspire us. Stay tuned!
        </p>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(10deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Blog;
