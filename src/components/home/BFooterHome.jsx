import { home } from "../../assets";

const BFooterHome = () => {
    return (
       
            <div className="w-full mx-auto grid h-fit  md:grid-cols-2">
                <div className="group">
                    <img className="w-full h-52 md:h-96 object-cover" src={home} alt="img1" />
                </div>

                <div className="group bg-white text-black gap-10 pl-10 pt-10 items-center  ml-[6%] mr-[6%] justify-end">
                    <h2 className="font-semibold text-sm md:text-md mb-2 ">
                        DEDICATED TO ECO-CONSCIOUS EXPERTISE:
                        <br />
                        REDEFINING THE TECH SPACE
                    </h2>
                    <p className="text-[8px] md:text-xs pr-4 md:pr-0">
                    When you use Identiko Integrated Solutions Limited Services, we collect 
                    information sent to us by your computer, mobile phone or other electronic 
                    access device. The automatically collected information includes but not 
                    limited to- data about the pages you access, computer IP address, device 
                    ID or unique identifier, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, standard web log data, still and
                    moving images.  <br /><br /> <br />
                    
                    We may also collect information you provide us including but not limited to
                    information on web form, survey responses account update information, email, 
                    phone number, organization you represent, official position, correspondence 
                    with Identiko Integrated Solutions Limited support services and telecommunication
                     with Identiko Integrated Solutions Limited. <br /><br /><br />
                     
                     We may also collect information about your transactions, enquiries and your 
                     activities on our platform or premises. We may also use information provided 
                     by third parties like social media sites.                       
                        

                       

                    </p>
                </div>
            </div>
      

    );
};

export default BFooterHome;
