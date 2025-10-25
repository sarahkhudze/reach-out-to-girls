import { useState, useEffect } from 'react';
import { salai, salaii } from '../../assets';

const GallerySwipe = () => {
  const [loading, setLoading] = useState(true);

  const founders = [
    {
      img: salai,
      title: 'Sarah Khudze',
      description:
        'Sarah Khudze is a visionary leader and dedicated advocate for STEM education, women empowerment, and digital literacy, with a strong passion for empowering young girls and women from underserved communities. As a skilled innovation manager, data manager, and software developer, Sarah brings a unique combination of technical expertise and leadership acumen to her work. A Mandela Washington Fellow, she has received extensive training in organizational leadership and is well-equipped to drive meaningful change.',
    },
    {
      img: salaii,
      title: 'Philip Banda',
      description:
        'Philip is a passionate and proficient professional with over 7 years of experience in program and project management. His detailed expertise lies in research, monitoring and evaluation, data management, community engagement, project design, and implementation. He is strongly committed to providing sustainable solutions for social, public, and environmental health challenges. Philip is dedicated to improving community well-being and making a positive impact on our environment.',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden py-24 px-4 flex flex-col items-center">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#E8B504] mb-10">
        {loading ? (
          <div className="h-8 bg-gray-300 animate-pulse w-48 md:w-64 mx-auto rounded"></div>
        ) : (
          'Meet the Founders'
        )}
      </h2>

      {/* Founders container — side by side on medium+ screens */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 ">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-justify w-full md:w-auto max-w-xs"
          >
            {loading ? (
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 animate-pulse rounded-full"></div>
            ) : (
              <img
                src={founder.img}
                alt={founder.title}
                className="w-32 h-32 md:w-48 bg-gray-800 md:h-72 object-contain rounded-full mb-4 "
              />
            )}

            {loading ? (
              <>
                <div className="h-6 bg-gray-300 animate-pulse w-3/4 mx-auto mt-2 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-2/3 mx-auto mt-3 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-2/3 mx-auto mt-2 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-1/2 mx-auto mt-2 rounded"></div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{founder.title}</h3>
                <p className="text-gray-600 text-lg md:text-base leading-relaxed">
                  {founder.description}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySwipe;