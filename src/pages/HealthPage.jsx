
import { Link } from "react-router-dom";
import { new19, new5, new7 } from "../assets";


const HealthPage = () => {
  return (
    <div className="w-full bg-white py-12 md:py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-8">
          <img
            src={new19}
            alt="Smart Period Initiative"
            className="w-[350px] md:w-[500px] h-fit object-contain border-2 border-[#65a7b2] rounded-lg"
          />
        </div>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          style={{ color: "#292496" }}
        >
          Women`s Health
        </h1>
        <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Reach Out to Girls is deeply committed to addressing women`s health as one of our core thematic areas.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-10 text-gray-700">
        
        {/* Smart Period Initiative */}
        <div className="bg-[#f8fbfd] border-l-4 border-[#65a7b2] p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#292496] mb-3">The `Smart Period`` Initiative</h2>
          <p className="mb-4">
            We have launched a transformative project known as <strong>`Smart Period`</strong> to advance menstrual health and hygiene management among adolescent girls, particularly in secondary schools across rural Malawi.
          </p>
          <p>
            With a primary focus on Community Day Secondary Schools (CDSSs), our multifaceted approach includes:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>Distribution of sanitary products</li>
            <li>Comprehensive menstrual health education sessions</li>
            <li>Training girls to create reusable sanitary pads</li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-4 text-center">Why Menstrual Health Matters</h2>
          <p className="leading-relaxed mb-4">
            In many rural communities, lack of access to menstrual products and education leads to school absenteeism, shame, and health risks. 
            By normalizing conversations and providing practical solutions, we keep girls in school and empower them with dignity.
          </p>
          <p className="leading-relaxed">
            The Smart Period initiative doesn’t just provide pads — it builds confidence, knowledge, and community support.
          </p>
        </div>

        {/* Photo Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">In Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[new7, new5].map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-[#65a7b2]/20 shadow-sm">
                <img
                  src={img}
                  alt={`Smart Period moment ${idx + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Call to Action */}
        <div className="bg-[#f0f9ff] border-l-4 border-[#FFBE0B] p-6 rounded-r-lg">
          <h2 className="text-xl font-bold text-[#292496] mb-3">Join Our Mission</h2>
          <p>
            Every girl deserves to manage her period with dignity, safety, and confidence. 
            Your support helps us distribute more kits, train more peer educators, and reach more schools.
          </p>
        </div>

        {/* Donate Button */}
        <div className="text-center mt-8">
          <Link
            to="/donate"
            className="inline-block bg-[#292496] text-white px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md"
          >
            Support Menstrual Health
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthPage;