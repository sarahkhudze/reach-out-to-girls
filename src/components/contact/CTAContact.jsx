import { face, bg } from "../../assets";

const CTAContact = () => {
    return (
        <div className="bg-repeat bg-center h-fit relative pb-[4%] pt-[4%] w-full z-1"
            style={{
                backgroundImage: `url(${bg})`,
                position: 'relative',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-fit gap-x-20">
                <div className="font-semibold text-[200%] md:text-md mb-2 text-white z-10" >
                    CONTACT US
                </div>

                <div className="z-10">
                    <img className="h-52 md:h-[50%] left-0 rounded-lg" src={face} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAContact;
