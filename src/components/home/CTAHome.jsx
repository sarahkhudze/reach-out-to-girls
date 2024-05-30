
import { AiOutlineArrowDown } from "react-icons/ai";
import { LandingVid } from "../../assets";
import { Link } from "react-router-dom";

const CTAHome = () => {

    return (

        <div className="m:h-screen overflow-hidden relative">
            <video className="bg:cover bg:center relative m-0 p-0" src={LandingVid} autoPlay loop muted alt="img1" />

            <div className=" absolute md:z-50 text-[50%] md:text-[150%] ml-[6%] text-left mt-32 text-white w-full h-full md:top-0 flex items-center justify-start">
                <div className="text-left text-shadow-lg">
                <p> Identiko Is Your One-Stop Shop</p>
                <p>For Digital Identity, Verification,</p>
                <p> And Technology Solutions</p> </div>


                <Link to="#section-1">
                    <div className="absolute bottom-24 left-0 right-0 mx-auto hidden md:flex justify-center
                 items-center mb-20 text-white font-bold  rounded-full">
                        <p className="bg-[#003997] rounded-full p-4 animate-bounce"><AiOutlineArrowDown /> </p>
                    </div>
                </Link>
            </div>



        </div>

    );
};

export default CTAHome;
