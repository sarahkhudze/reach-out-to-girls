import { home } from "../../assets";
import { useState, useEffect } from "react";

const BFooterHome = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top1 = document.getElementById('div1').getBoundingClientRect().top;
            const top2 = document.getElementById('div2').getBoundingClientRect().top;
            const top3 = document.getElementById('div3').getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            setIsVisible1(top1 < windowHeight);
            setIsVisible2(top2 < windowHeight);
            setIsVisible3(top3 < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <div className="w-full mx-auto grid h-fit md:grid-cols-2">
            <div className="group">
                <img className="w-full h-52 md:h-96 object-cover" src={home} alt="img1" />
            </div>

            <div className="group bg-white text-black gap-10 pl-10 pt-4 md:pt-10 items-center ml-[6%] mr-[6%] justify-end">
                <h2 className="font-semibold text-sm md:text-md md:mb-2 ">
                    LATEST NEWS IN IDENTIKO:
                    <br />
                    IDENTIKO BLOG
                </h2>
                <p className="text-xs md:text-xs pr-4 md:pr-0 py-4 md:py-0">
                    <p id="div1" className={`duration-500 transition-all scroll-smooth ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                        }`}>When you use Identiko Integrated Solutions Limited Services, we collect
                        information sent to us by your computer, mobile phone or other electronic
                        access device. The automatically collected information includes but not
                        limited to- data about the pages you access, computer IP address, device
                        ID or unique identifier, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, standard web log data, still and
                        moving images.</p>  <br /><br /> <br />

                    <p id="div2" className={`duration-500 transition-all scroll-smooth ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                        }`}>We may also collect information you provide us including but not limited to
                        information on web form, survey responses account update information, email,
                        phone number, organization you represent, official position, correspondence
                        with Identiko Integrated Solutions Limited support services and telecommunication
                        with Identiko Integrated Solutions Limited.</p> <br /><br /><br />

                    <p id="div3" className={`duration-500 transition-all scroll-smooth ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                        }`}>We may also collect information about your transactions, enquiries and your
                        activities on our platform or premises. We may also use information provided
                        by third parties like social media sites. </p>
                </p>
            </div>
        </div>
    );
};

export default BFooterHome;
