
import { Link } from "react-router-dom";
import { new19 } from "../assets";

const HealthPage = () => {
  return (
    <div className="w-full bg-white py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-8">
          <img
            src={new19}
            alt="ICT Skills for Girls"
            className="w-[350px] md:w-[500px] h-fit object-contain border-2 border-[#65a7b2]"
          />
        </div>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          style={{ color: "#292496" }}
        >
          Women Health
        </h1>
        <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Reach Out to Girls is deeply committed to addressing women health as one of our core thematic areas. In our ongoing efforts to promote womens health and well-being....
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 text-gray-700">
        <div className="bg-[#f8fbfd] border-l-4 border-[#65a7b2] p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#292496] mb-3">Our Approach</h2>
          <p>
            We provide hands-on training in computer literacy, basic coding, internet safety, and digital creativity to girls in rural Malawi who have little to no prior exposure to technology.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-4 text-center">Why It Matters</h2>
          <p className="leading-relaxed mb-4">
            Without digital skills, girls are excluded from education, jobs, and civic participation in an increasingly connected world. Our program bridges this gap early — building confidence and competence.
          </p>
          <p className="leading-relaxed">
            Many of our graduates go on to teach peers, join tech clubs, or pursue further studies in STEM fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="text-center p-5 bg-white border border-[#65a7b2]/20 rounded-xl">
            <div className="text-3xl font-bold text-[#292496]">200+</div>
            <div className="text-gray-600">Girls Trained</div>
          </div>
          <div className="text-center p-5 bg-white border border-[#65a7b2]/20 rounded-xl">
            <div className="text-3xl font-bold text-[#292496]">12</div>
            <div className="text-gray-600">Schools Reached</div>
          </div>
          <div className="text-center p-5 bg-white border border-[#65a7b2]/20 rounded-xl">
            <div className="text-3xl font-bold text-[#292496]">85%</div>
            <div className="text-gray-600">Continue to Advanced ICT</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6">Support our mission to bring digital opportunity to every girl.</p>
          <Link
            to="/donate" SO
            className="inline-block bg-[#292496] text-white px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthPage;