
import { AiOutlineArrowDown } from "react-icons/ai";
import { LandingVid } from "../../assets";
import { Link } from "react-router-dom";

const CTAHome = () => {

    return (

        <div className="h-full md:h-screen overflow-hidden relative">
            <video className="h-40 md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0" src={LandingVid} autoPlay loop muted alt="img1" />

            <div className=" absolute md:z-50 text-[50%] md:text-[150%] ml-[6%] text-left mt-32 text-white w-full h-full md:top-0 flex items-center justify-start">
                <div className="text-start text-shadow-lg">
                    <p> Identiko Is Your One-Stop Shop  </p>
                    <p> For Identity, Verification, And </p>
                </div>

                <Link to="#section-1" className="absolute bottom-44 right-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex text-center justify-center
                 items-center text-white font-bold rounded-full">
                    <p className="bg-[#003997] rounded-full p-4 animate-bounce"><AiOutlineArrowDown /> </p>

                </Link>
            </div>
        </div>

    );
};

export default CTAHome;
