// import { useState } from "react"
import tech_solution from "../../assets/services_icon/tech_solution.svg";
import enrollment_services from "../../assets/services_icon/enrollment_services.svg";
import software_application from "../../assets/services_icon/software_application.svg";
import identity_solution from "../../assets/services_icon/identity_solution.svg";
import { card1, card2, card3, card4, no1, no2, no3, no4 } from "../../assets";

const services = [
    {
        id: "div1",
        image: no1,
        img: identity_solution,
        title: "Identity & Security Solutions",
        description:
            "Comprehensive identity and security services safeguard personal and organizational data. We provide advanced biometric and verification solutions to ensure secure and reliable identity management.",
        bgImg: card2,
    },
    {
        id: "div2",
        image: no2,
        img: software_application,
        title: "Software & IT Solutions",
        description:
            "Innovative software and IT services streamline operations and enhance efficiency. From development to integration, we deliver robust solutions tailored to your business needs, ensuring security and scalability.",
        bgImg: card4,
    },
    {
        id: "div3",
        image: no3,
        img: tech_solution,
        title: "Managed Services & SmartCity Solutions",
        description:
            "Tailored managed services and smart solutions optimize business processes and customer experiences. We offer specialized support to enhance operational efficiency and meet unique organizational needs.",
        bgImg: card3,
    },
    {
        id: "div4",
        image: no4,
        img: enrollment_services,
        title: "Surveillance & Monitoring Solutions",
        description:
            "Advanced surveillance and monitoring systems ensure security and real-time management. Our solutions include electronic voting, traffic management, and IoT-enabled systems to maintain safety and control.",
        bgImg: card1,
    },
];

const ServiceC = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center  px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> MANAGED SERVICES AND SMARTCITY SOLUTIONS </p>
                    <p className="text-xs md:text-xl">
                        {" "}
                        Tailored managed services and smart solutions optimize business processes and customer experiences. {" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2%]  md:pl-12 md:pr-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            id={service.id}
                            className="group cursor-pointer border rounded-md relative flex flex-col 
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl 
                        text-center duration-500 h-40 p-4"
                        >
                            <p className="absolute description text-balance text-sm md:text-md mb-12 md:mb-0 font-bold z-10">
                                {" "}
                                {service.title}{" "}
                            </p>
                            <p className="absolute description mt-4 left-0 right-0 text-justify pl-6 pr-6 text-sm md:text-md mb-12 md:mb-10 z-10  w-fit">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ServiceC;
