import Cards from "./Cards";

const Vision = () => {
  return (
    <div className="relative bg-white overflow-x-hidden bg-cover bg-center grid md:py-20 md:px-8 p-8 border-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[#292496]"></div>
      <Cards />
    </div>
  );
};

export default Vision;
