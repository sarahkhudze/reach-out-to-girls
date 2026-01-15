import { MdOutlineCall, MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-[#292496] text-white pt-12 pb-8 px-4 md:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[#FFBE0B]">
              Reach Out to Girls
            </h3>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              Empowering girls in rural Malawi through education, health, ICT,
              and mentorship — because every girl deserves a chance to thrive.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RoGMalawi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/RoGMalawi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/rogmalawi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#65a7b2]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#FFBE0B] transition-colors">
                  Home
                </Link>
              </li>
              {/* {/* <li><Link to="/projects" className="hover:text-[#FFBE0B] transition-colors">Our Projects</Link></li> */}
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#FFBE0B] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FFBE0B] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#65a7b2]">
              Contact Us
            </h4>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <MdOutlineCall className="mt-1 flex-shrink-0" />
                <a href="tel:+265994682891" className="hover:text-[#FFBE0B]">
                  +265 996 62 32 27
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdOutlineEmail className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@reachouttogirls.org"
                  className="hover:text-[#FFBE0B] break-words"
                >
                  reachouttogirls@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="mt-1 flex-shrink-0" />
                <span>Area 49, Lilongwe, Malawi</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFBE0B]">
              Support Our Mission
            </h4>
            <p className="text-white/85 text-sm mb-4">
              Your gift creates real change. Every contribution fuels hope,
              education, and opportunity.
            </p>
            <Link
              to="/donate"
              className="inline-block bg-white text-[#292496] font-bold py-2 px-5 rounded-full hover:bg-[#FFBE0B] hover:text-[#292496] transition-all duration-300 shadow-md"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 my-6"></div>

        <div className="text-center text-white/70 text-sm">
          © {new Date().getFullYear()} - Reach Out to Girls. All rights reserved
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> | </span>
          <span className="mt-1 sm:mt-0 block sm:inline">
            {" "}
            Empowering girls in Malawi since 2020
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
