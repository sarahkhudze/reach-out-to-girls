import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {MyPhoto} from './MyPhoto'

const GallerySwipe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div className='bg-black overflow-x-hidden'>
    <h2 className=" text-center text-2xl font-bold text-white pt-12">OUR EVENT GALLERY</h2>
    <Slider {...settings}>
      {MyPhoto.map((PhotoLink, index) => (
        <div key={index}>
          <img src={PhotoLink} alt={`Slide ${index + 1}`} className="mx-auto w-[70%] h:[100%] mt-2 mb-12" />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default GallerySwipe;
