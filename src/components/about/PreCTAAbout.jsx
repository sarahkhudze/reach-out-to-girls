const PreCTAAbout = () => {
  const colors = ["#126e7d", "#126e7d", "#126e7d", "#126e7d", "#126e7d", "#47BDD9", "#292496", "#096E6A", "#E8B504", "#47BDD9"];

  return (
    <div className="relative w-full py-[4%] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-2"
        style={{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          background: `linear-gradient(to right, ${colors[4]}, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
        }}
      ></div>
      <div
        className="absolute top-0 left-0 h-full w-2"
        style={{
          background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
        }}
      ></div>
      <div
        className="absolute top-0 right-0 h-full w-2"
        style={{
          background: `linear-gradient(to bottom, ${colors[4]}, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto flex items-center justify-center py-4 relative z-10">
        <div className="font-semibold text-[120%] md:text-[200%] text-black text-center px-4">
          Technology, Craft, and Community. Reimagined.
        </div>
      </div>
    </div>
  );
};

export default PreCTAAbout;
