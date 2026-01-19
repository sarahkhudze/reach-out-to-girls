/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlineCall, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";

const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium animate-fade-in ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        ✕
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_2ixxrva";
    const templateID = "template_ak36qoj";
    const publicKey = "kv0oL9-nCt-1arW55";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setToast({
          show: true,
          message: "Message sent successfully! We’ll reply within 24 hours.",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setToast({
          show: true,
          message:
            "Oops! Failed to send. Please try again or email us directly.",
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const closeToast = () => {
    setToast({ ...toast, show: false });
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-[#f0f4f8]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#65a7b2]/5 animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-[#FFBE0B]/5 animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#292496]/5 animate-float-fast"></div>
      </div>

      <div className="max-w-6xl mx-auto py-16 md:py-24 px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto relative">
          <div className="inline-block mb-6">
            <span className="text-[#292496] text-sm font-semibold tracking-wider uppercase">
              Connect With Us
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-normal tracking-wide"
            style={{
              fontWeight: 700,
              color: "#292496",
              letterSpacing: "0.02em",
            }}
          >
            Let’s Build Together
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#65a7b2] to-[#FFBE0B] mx-auto rounded-full mt-6"></div>
          <p className="text-gray-700 mt-8 leading-relaxed max-w-2xl mx-auto">
            Every message you send plants a seed of change in a girl’s life in
            Malawi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#292496]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#65a7b2]/10 rounded-bl-full"></div>

            <h2 className="text-2xl font-bold text-[#292496] mb-6 relative z-10">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 mb-2 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="e.g., Grace Ana."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-800 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="Partnership Inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-800 mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65a7b2] focus:border-transparent outline-none transition"
                  placeholder="Tell us how you'd like to support girls in Malawi..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-medium py-3.5 rounded-lg transition-all duration-300 shadow-md ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#292496] text-white hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-0.5"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#65a7b2]/10">
                <h2 className="text-2xl font-bold text-[#292496] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#65a7b2] bg-[#65a7b2]/10 p-2 rounded-full">
                      <MdOutlineEmail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email Us</p>
                      <a
                        href="mailto:reachouttogirls@gmail.com"
                        className="text-gray-700 hover:text-[#292496] transition-colors"
                      >
                        reachouttogirls@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#292496] bg-[#292496]/10 p-2 rounded-full">
                      <MdOutlineCall size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Call Us</p>
                      <a
                        href="tel:+265996623227"
                        className="text-gray-700 hover:text-[#292496] transition-colors"
                      >
                        +265 996 623 227
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#FFBE0B] bg-[#FFBE0B]/10 p-2 rounded-full">
                      <MdLocationOn size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Our Location</p>
                      <p className="text-gray-700">Area 49, Lilongwe, Malawi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#65a7b2]/20 h-64">
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

              <div className="bg-gradient-to-r from-[#f0f9ff]/80 to-[#fffbeb]/80 p-6 rounded-2xl border border-[#FFBE0B]/30 backdrop-blur-sm">
                <p className="text-gray-800 italic flex items-start gap-2">
                  <span className="text-[#FFBE0B] text-xl">✨</span>
                  We read every message and respond within{" "}
                  <strong>24 hours</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">
            Ready to make a difference today?
          </p>
          <Link
            to="/donate"
            className="inline-block bg-gradient-to-r from-[#292496] to-[#65a7b2] text-white animate-bounce px-8 py-4 rounded-full font-medium hover:from-[#65a7b2] hover:to-[#292496] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Support a Girl`s Future
          </Link>
        </div>
      </div>

      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}

      <style jsx>{`
        /* ... your float animations ... */
        @keyframes float-slow {
          /* ... */
        }
        /* ... */
      `}</style>
    </div>
  );
};

export default ContactPage;
