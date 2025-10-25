const CTAHome = () => {
  return (
        <div
            className="bg-no-repeat bg-cover relative h-[40vh] lg:h-[70vh] w-full"
            style={{
              
                backgroundPosition: 'center',
                position: "relative",
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#096E6A]"></div>
            <div className=" absolute text-3xl lg:text-5xl text-left text-white w-full h-full lg:top-8 flex items-end justify-start">
                <div className="block ml-2 lg:ml-9 text-left font-extrabold text-shadow-xl mb-[22%] lg:mb-[15%] transform animate-slide-up pl-4 w-[60%] lg:w-fit">
                    <p> Solution Inc: Where Innovation meets Impact</p>
                </div>
              
            </div>
          
            <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
        </div>
    );
};

export default CTAHome;
