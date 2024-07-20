const services = [
    {
        title: "Managed Services & Outsourcing",
        description: "",
    },
    {
        title: "Smart Customer Experience Solutions",
        description: "",
    },
    {
        title: "E-government Services Platform",
        description: "",
    },
    {
        title: "Smart City/Campus Services",
        description: "",
    },
    {
        title: "Smart Customer Experience Solutions",
        description: "",
    },
    {
        title: "Workplace Modernization Solution",
        description: "",
    },
    {
        title: "Prisons/Correctional Facility Management",
        description: "",
    },
];

const ServiceC = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center  px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> MANAGED SERVICES AND SMARTCITY SOLUTIONS </p>
                    <p className="text-xs md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We offer specialized support to enhance operational efficiency and meet unique organizational needs {" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2%]  md:pl-12 md:pr-12">
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

export default ServiceC;
