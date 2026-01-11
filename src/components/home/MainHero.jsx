

const MainHero = () => {
  return (
    <div
      id="donate"
      className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #292496 1px, transparent 2px),
            radial-gradient(circle at 90% 80%, #65a7b2 1px, transparent 2px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Handwritten Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide mb-6"
          style={{
            fontWeight: 700,
            color: "#292496",
            letterSpacing: "0.02em",
          }}
        >
          Support Reach Out to Girls
        </h2>
        <div className="w-20 h-1 bg-[#65a7b2] mx-auto -translate-y-3 rounded-full mb-8"></div>

        {/* Impact Message */}
        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-10">
          Your gift helps girls in rural Malawi access education, health resources, ICT training, and mentorship. 
          Every contribution — big or small — plants a seed of change that grows into a lifetime of opportunity.
        </p>

        {/* Donate Button */}
        <a
          href="/donate" // 👈 Link to your dedicated /donate page
          className="inline-block bg-[#292496] text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Donate Now
        </a>

        {/* Trust Note */}
        <p className="mt-6 text-gray-500 text-sm italic">
          100% of your donation goes directly to program support for girls in Malawi.
        </p>
      </div>
    </div>
  );
};

export default MainHero;