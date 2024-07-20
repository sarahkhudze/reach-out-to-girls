
const services = [
    {
        title: "Biometric Solutions",
        description:
            "Biometric identification has evolved beyond security to mainstream applications, offering reliable, convenient recognition through physiological or behavioral traits. Driven by technological advances and growing security needs, Identiko provides innovative biometric solutions across various industries for identity management and authentication Solutions",
    },
    {
        title: "Identity-Based Solution",
        description:
            "A strong identification system requires robust ID verification for benefits administration, health insurance, border control, online authentication, voter and driving license checks, and social security entitlement. Each case demands precise validation of the document holder’s identity",
    },
    {
        title: "State National ID & Civic Registration",
        description:
            "Security is a priority for governments, and unique identity verification is crucial to prevent identity theft and ensure fair resource allocation. Our solution offers customizable systems—enrolment, data cleansing, deduplication, and databases—to support effective civil registration and societal security",
    },
    {
        title: "Enrolment Services",
        description: "",
    },
    {
        title: "Demographic Data Harmonized",
        description: "",
    },
    {
        title: "ABIS (Civil & Criminal) Solution",
        description: "",
    },
    {
        title: "Foundational Civil Registration",
        description: "",
    },
    {
        title: "Card Production & Personalization",
        description: "",
    },
    {
        title: "Identity Verification Solution",
        description: "",
    },
    {
        title: "Mobile Verification Services",
        description: "",
    },
    {
        title: "E-passport Solutions",
        description: "",
    },
    {
        title: "Drivers License Services",
        description: "",
    },
    {
        title: "Border Control Services",
        description: "",
    },
    {
        title: "Criminal Database Services",
        description: "",
    },
    {
        title: "Security & Access Control",
        description: "",
    },
];

const ServiceA = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> IDENTITY AND SECURITY SOLUTIONS </p>
                    <p className="text-xs md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We provide advanced biometric and verification solutions to ensure secure and reliable identity management{" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-[2%]  md:pl-12 md:pr-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            id={service.id}
                            className="group cursor-pointer border rounded-md relative flex flex-col 
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl 
                        text-center duration-500 h-56 p-4"
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

export default ServiceA;
