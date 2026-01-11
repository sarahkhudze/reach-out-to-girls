import { new13 } from "../../assets";

const CTAHome = () => {
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFBE0B", "#FB5607"];

  return (
    <div
      className="relative h-[40vh] lg:h-[90vh] w-full bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${new13})`,
      }}
    >
    
      {/* <div className="absolute inset-0 bg-blue-20/40"></div> */}

      <div
        className="absolute top-6 right-6 w-32 h-32 rounded-full opacity-30 blur-xl z-10"
        style={{
          background: `radial-gradient(circle, ${colors[1]}, ${colors[3]})`,
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight drop-shadow-lg max-w-4xl">
          <span className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #FFFFFF, #FFFFFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
            Reach Out to Girls
          </span>
        </h1>
      </div>
     
      <div className="absolute top-10 left-8 w-3 h-3 rounded-full bg-white opacity-50 animate-bounce"></div>
      <div className="absolute bottom-16 right-12 w-2 h-2 rounded-full bg-white opacity-60 animate-ping"></div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        h1 {
          animation: slide-up 1s ease-out forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default CTAHome;