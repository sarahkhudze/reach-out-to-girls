
import { Link } from "react-router-dom";
import { identikoWeb } from "../../assets";
import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div
      className="overflow-x-hidden bg-white top-0 flex items-center border-b border-[#EDEFF2] justify-center gap-[25%]" >

      <div> <img src={identikoWeb} alt="webImg" className={`w-[100%] translate-x-8 cursor-pointer`} onClick={handleClick} /></div>
      <div className="w-[100%] flex items-center justify-center gap-24">
        <div
          className="cursor-pointer duration-300"
          style={{ color: "#352214", fontSize: "8px" }} >
          <p className="text-sm text-[blue] hover:text-[#001049]">
            <Link to="/about">
              <p className="flex">About Us</p>
            </Link>
          </p>
        </div>

        <div
          className="cursor-pointer duration-300"
          style={{ color: "#352214", fontSize: "8px" }}>
          <p className="text-sm text-[blue] hover:text-[#001049]">
            <Link to="/services">
              <p>Services</p>
            </Link>
          </p>
        </div>

        <div
          className="cursor-pointer duration-300"
          style={{ color: "#352214", fontSize: "8px" }}>
          <p className="text-sm text-[blue] hover:text-[#001049]">
            <Link to="/career">
              <p>Career</p>
            </Link>
          </p>
        </div>
      </div>

      <div
        className="p-4 cursor-pointer duration-300"
        style={{ color: "#352214", fontSize: "8px" }}>

        <div className="text-sm text-[blue] hover:bg-[#001049] hover:text-white border rounded-full pl-8 pr-8 pt-2 pb-2 flex justify-end">
          <Link to="/contactUs">
            <div className="flex justify-center items-center gap-[6%]">
              <p>Contact</p>
              <p>Us</p>
              <span className="font-bold">{'>'} </span>
            </div>


          </Link>
        </div>
      </div>

    </div>

  );
};

export default Header;
