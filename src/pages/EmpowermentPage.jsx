import { Link } from "react-router-dom";
import { new3, new32, new9, reach4 } from "../assets";

const EmpowermentPage = () => {
  return (
    <div
      className="w-full bg-[#f9feff] py-12 md:py-16 px-4"
      style={{
        backgroundImage: `
      radial-gradient(circle at 10% 20%, rgba(101, 167, 178, 0.03) 1px, transparent 1px),
      radial-gradient(circle at 90% 80%, rgba(41, 36, 150, 0.02) 1px, transparent 1px)
    `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
       
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          style={{ color: "#292496" }}
        >
          Women Empowerment
        </h1>
        <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg max-w-md mx-auto leading-relaxed">
          In rural areas of Malawi, women often face significant economic
          challenges, which can hinder their ability to support their families
          and contribute to their communities.
        </p>
         <div className="flex justify-center mb-12 mt-8">
          <img
            src={new9}
            alt="Women Empowerment Initiative"
            className="w-[350px] md:w-[500px] h-fit object-contain border-2 border-[#65a7b2] rounded-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-10 text-gray-700">
        {/* Program Overview */}
        <div className="bg-[#f8fbfd] border-l-4 border-[#65a7b2] p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#292496] mb-3">
            Empowering Rural Women
          </h2>
          <p className="mb-4">
            Economic hardship in rural Malawi doesn’t just affect women — it
            impacts entire families, especially girls’ education. When mothers
            struggle financially, daughters are often the first to drop out of
            school.
          </p>
          <p>
            To break this cycle, we launched the{" "}
            <strong>
              “Empowering Rural Women through Agribusiness and Small Business
              Initiatives”
            </strong>{" "}
            program. To date, <strong>65 women</strong> have gained the tools to
            build sustainable livelihoods — and keep their daughters in school.
          </p>
        </div>

        {/* Objectives */}
        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-4 text-center">
            Our Objectives
          </h2>
          <div className="bg-white border border-[#65a7b2]/20 rounded-xl p-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Provide training and resources for women to start and manage
                agribusinesses and small businesses.
              </li>
              <li>
                Enhance the economic independence of rural women, enabling them
                to support their families.
              </li>
              <li>
                Reduce dropout rates among girls by improving the financial
                stability of their households.
              </li>
            </ul>
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            Economic Independence in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[reach4, new32, new3].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-[#65a7b2]/20 shadow-sm"
              >
                <img
                  src={img}
                  alt={`Empowerment moment ${idx + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Call to Action */}
        <div className="bg-[#f0f9ff] border-l-4 border-[#FFBE0B] p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#292496] mb-3">
            Your Support Creates Ripple Effects
          </h2>
          <p>
            When you empower a woman, you uplift her entire family. Your
            donation helps us train more women in agribusiness, provide startup
            kits, and create savings groups — so girls stay in school and
            communities thrive.
          </p>
        </div>

        {/* Donate Button */}
        <div className="text-center mt-8">
          <Link
            to="/donate"
            className="inline-block bg-[#292496] text-white px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md"
          >
            Empower a Woman Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmpowermentPage;
