import { useNavigate } from "react-router-dom/dist";
import { home2 } from "../../assets";

const Hero = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        if (window.location.pathname !== "/services") {
            navigate("/services");
        }
    };

    const handleAClick = () => {
        if (window.location.pathname !== "/service") {
            navigate("/service");
        }
    };

    // py-10 grid grid-cols-2 md:grid-cols-4 gap-[6%] pr-12"

    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
                <div className="text-center text-white">
                    <p className="text-md md:text-2xl mt-8  font-bold">OUR SERVICES</p>
                    <p className="text-xs md:text-sm">Our solutions are all about simplification and optimisation </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[7%] md:gap-[6%] pr-12">
                    <div className="group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">IDENTITY BASED SOLUTIONS </p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4" onClick={handleAClick}>Learn more <span className="font-bold"> {'>'} </span> </p>
                    </div>
                    <div className="group cursor-pointer rounded-md relative overflow-hidden w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">ENROLMENT OPERATIONS</p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4" onClick={handleAClick}>Learn more <span className="font-bold"> {'>'} </span> </p>
                    </div>
                    <div className="group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">IDENTITY MANG. SOLUTIONS</p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4" onClick={handleAClick}>Learn more <span className="font-bold">{'>'} </span> </p>
                    </div>

                    <div className="group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">SOFTWARE APPLICATION</p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4" onClick={handleAClick}>Learn more <span className="font-bold">{'>'} </span> </p>
                    </div>
                </div>

                <div className="text-center mt-[24%] md:mt-[8%]">
                    <button className="bg-[#001049] hover:bg-white border rounded-full w-fit p-3 text-[#ffffff] hover:text-[#001049]" onClick={handleClick}>See all services {'⇾'}</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
