
import { Link } from "react-router-dom";
import { officeSpace } from "../../assets";
import { AiOutlineArrowDown } from "react-icons/ai";

const CTAServices = () => {
    return (
        <div className="bg-no-repeat bg-cover relative py-[12%] md:py-[12%] w-full z-1 px-4 md:px-0"
            style={{
                backgroundImage: `url(${officeSpace})`,
                position: 'relative',
            }}
        >          
            <div className="text-white max-w-screen-xl mx-auto mt-40 mb-20 z-10 ">
                <div className="group gap-10 z-10 flex flex-col justify-center items-center text-center">
                    <div className="text-[100%] md:text-[100%] md:mb-2 text-white ">
                        Secure Your Future <br />
                        With Advanced Biometrics Solution
                    </div> 
                    {/* <div className="hidden md:block text-sm md:text-md w-fit text-center">
                        Zone is a regulated Blockchain network that enables<br/> 
                        payments and acceptance of digital currencies. We are <br/>
                        building one global network to pay anyone, through any  <br/>
                        means, in any currency.
                    </div>                    */}
                </div>
                <Link to="#section-1">
                    <div className="absolute bottom-40 left-0 right-0 mx-auto flex justify-center
                 items-center mt-40 text-white font-bold  rounded-full">
                        <p className="bg-[#003997] rounded-full p-4 animate-bounce"><AiOutlineArrowDown/> </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CTAServices;


  {/* <div className="absolute inset-0 bg-[#ffffff] opacity-0"></div> */}
