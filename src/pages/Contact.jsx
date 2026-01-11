import { MdOutlineEmail, MdOutlineCall, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="w-full bg-white py-12 md:py-16 px-4 relative overflow-hidden">
     
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-3"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #292496 1px, transparent 2px),
            radial-gradient(circle at 90% 80%, #65a7b2 1px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto">
      
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide mb-6"
            style={{
              fontWeight: 700,
              color: "#292496",
              letterSpacing: "0.02em",
            }}
          >
            Let’s Walk Together
          </h1>
          <div className="w-24 h-1 bg-[#65a7b2] mx-auto rounded-full"></div>
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
            We’d love to hear from you — whether you’re a partner, donor,
            volunteer, or simply inspired by our work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       
          <div className="bg-[#f9fbfd] p-8 rounded-2xl border border-[#292496]/10 shadow-sm">
            <h2 className="text-2xl font-bold text-[#292496] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="e.g., Grace M."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="Partnership Inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="Tell us how you'd like to support girls in Malawi..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#292496] text-white font-medium py-3.5 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

         
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#292496] mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#65a7b2]">
                    <MdOutlineEmail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a
                      href="mailto:reachouttogirls@gmail.com"
                      className="text-gray-700 hover:text-[#292496] transition-colors"
                    >
                      reachouttogirls@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#65a7b2]">
                    <MdOutlineCall size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a
                      href="tel:+265994682891"
                      className="text-gray-700 hover:text-[#292496] transition-colors"
                    >
                      +265 996 623 227
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#65a7b2]">
                    <MdLocationOn size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Our Location</p>
                    <p className="text-gray-700">Area 49, Lilongwe, Malawi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#65a7b2]/20 shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.472443431356!2d33.78750237505866!3d-13.96250328632086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1edc3b3e5e8f3d4d%3A0x5e5e5e5e5e5e5e5e!2sArea%2049%2C%20Lilongwe%2C%20Malawi!5e0!3m2!1sen!2smw!4v1710000000000!5m2!1sen!2smw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Reach Out to Girls - Area 49, Lilongwe"
              ></iframe>
            </div>

           
            <div className="bg-white border-l-4 border-[#FFBE0B] p-4 rounded-r-lg">
              <p className="text-gray-700 italic">
                We read every message and aim to respond within{" "}
                <strong>24 hours</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
