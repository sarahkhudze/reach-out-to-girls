import { new12, new19, new9, reach14 } from "../../assets";
import { Link } from "react-router-dom"; // 👈 Added import

const Hero = () => {
  const services = [
    {
      title: "ICT Skills for Girls",
      description:
        "In today's rapidly evolving digital landscape, possessing Information and Communication Technology (ICT) skills is crucial for personal and professional success.",
      image: reach14,
    },
    {
      title: "Women Health",
      description:
        "Reach Out to Girls is deeply committed to addressing women's health as one of our core thematic areas. In our ongoing efforts to promote women's health and well-being...",
      image: new19,
    },
    {
      title: "Beautiful Minds Scholarship",
      description:
        "Education is a powerful tool for breaking the cycle of poverty and creating a pathway to a brighter future. However, in rural Malawi, many bright and promising girls face significant...",
      image: new12,
    },
    {
      title: "Women Empowerment",
      description:
        "In rural areas of Malawi, women often face significant economic challenges, which can hinder their ability to support their families and contribute to their communities.",
      image: new9,
    },
  ];

  // Define paths in the same order as services
  const paths = [
    "/projects/ict",
    "/projects/health",
    "/projects/scholarship",
    "/projects/empowerment",
  ];

  return (
    <div
      id="section-1"
      className="w-full min-h-screen flex flex-col items-center justify-start pt-20 pb-16 px-4 md:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Title */}
      <div className="text-center mb-12 max-w-3xl">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight"
          style={{
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: "#292496",
          }}
        >
          Our Projects
        </h2>
        <div
          className="w-16 h-1 mx-auto mt-2 rounded-full"
          style={{ backgroundColor: "#65a7b2" }}
        ></div>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Circular Image Badge */}
            <div className="flex justify-center mb-5">
              <img
                src={service.image}
                alt={service.title}
                className="w-[250px] md:w-[300px] h-fit object-contain border-2 "
              />
            </div>

            {/* Content */}
            <h3
              className="text-xl md:text-2xl font-bold mb-3 text-center"
              style={{ color: "#292496" }}
            >
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base text-center flex-grow">
              {service.description}
            </p>

            {/* ✅ Updated: Use <Link> instead of <a> */}
            <div className="flex justify-center mt-5">
              <Link
                to={paths[idx]}
                className="inline-block bg-[#292496] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;