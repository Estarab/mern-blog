import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Import desktop images
import image1 from '../assets/remember me/img111.jpg';
import image2 from '../assets/remember me/img22.jpg';
import image3 from '../assets/remember me/img33.jpg';
import image4 from '../assets/remember me/img44.jpg';
import image5 from '../assets/remember me/img555.jpg';
// Import mobile images
import mobileImage1 from '../assets/remember me/img111.jpg';
import mobileImage2 from '../assets/remember me/img22.jpg';
import mobileImage3 from '../assets/remember me/img33.jpg';
import mobileImage4 from '../assets/remember me/img44.jpg';
import mobileImage5 from '../assets/remember me/img555.jpg';

const sliderData = [
  {
    desktopImage: image1,
    mobileImage: mobileImage1,
    title: 'Building Sustainable Food Systems',
  },
  {
    desktopImage: image2,
    mobileImage: mobileImage2,
    title: 'Collectively promote environmental outcomes',
  },
  {
    desktopImage: image3,
    mobileImage: mobileImage3,
    title: 'Fostering partnerships and opportunities that contribute to Africa’s sustainable Food security',
  },
  {
    desktopImage: image4,
    mobileImage: mobileImage4,
    title: 'Collectively enhance social and economic outcomes',
  },
  {
    desktopImage: image5,
    mobileImage: mobileImage5,
    title: 'Enhancing food, utilisation, access and availability',
  },
];

const DesktopSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative w-full h-screen flex flex-col">
            <div className="bg-[#46923c] bg-opacity-100 p-4 md:p-8 text-center text-white z-10">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            </div>
            <img
              src={isMobile ? slide.mobileImage : slide.desktopImage}
              alt={slide.title}
              className="object-cover w-full h-full brightness-150"
              style={{ objectFit: isMobile ? 'contain' : 'cover' }} // show fully on mobile
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DesktopSlider;

