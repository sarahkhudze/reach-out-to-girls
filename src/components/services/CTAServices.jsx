
import { Link } from "react-scroll";
import { circular, bg } from "../../assets";

const CTAServices = () => {
    return (
        <div className="bg-repeat bg-center h-fit relative pt-[4%] w-full z-1"
            style={{
                backgroundImage: `url(${bg})`,
                position: 'relative',
            }}
        >

            <div className="absolute inset-0 bg-[#001049] opacity-95"></div>

            <div className="max-w-screen-xl mx-auto grid  h-fit md:grid-cols-2 gap-y-10 gap-x-20 mt-10 z-10">
                <div className="group text-white gap-20 z-10">
                    <h2 className="font-semibold text-[300%] md:text-md mb-2 text-[#D85012] ">
                        Next generation <br />
                        payments infrastructure
                    </h2> <br /> <br />
                    <p className="w-[100%] text-[8px] md:text-xl pr-4 md:pr-0">
                        Zone is a regulated Blockchain network that enables payments and acceptance of
                        digital currencies. We are building one global network to pay anyone, through
                        any means, in any currency..
                    </p>
                    <br /> <br />
                    <div className="flex text-center w-full justify-start items-center">
                        <Link to='/contactUs'> <button className="bg-[#D85012] border rounded-full p-3 text-white">Find Out More Us {'⇾'}</button></Link>
                    </div>
                </div>

                <div className="group z-10">
                    <img className="h-52 md:h-[80%] left-0" src={circular} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAServices;
