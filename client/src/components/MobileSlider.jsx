import React from 'react';
import Slider from 'react-slick';

// Import images from the assets folder
import image1 from '../assets/remember me/img111.jpg';
import image2 from '../assets/remember me/img22.jpg';
import image3 from '../assets/remember me/img33.jpg';
import image4 from '../assets/remember me/img44.jpg';
import image5 from '../assets/remember me/img555.jpg';

const MobileSlider = () => {
  const images = [
    { src: image1, title: 'Building Sustainable Food Systems' },
    { src: image2, title: 'Collectively promote environmental outcomes' },
    { src: image3, title: 'Fostering partnerships and opportunities that contribute to Africa’s sustainable food security' },
    { src: image4, title: 'Collectively enhance social and economic outcomes' },
    { src: image5, title: 'Enhancing food, utilisation, access and availability' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-1 py-1">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-center text-white mb-2 bg-[#46923c]">{image.title}</h3>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-contain brightness-150"
                style={{ maxHeight: '400px' }} // Maintain aspect ratio
              />
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="text-8xl font-bold text-center mt-1 text-[#ffa500] bg-[#ffa500]">Arien</h2> {/* Title at the bottom */}
      
      <style jsx>{`
        .slick-slide {
          transition: transform 0.5s ease;
        }
        .slick-active img {
          transform: scale(1.05); /* Slight zoom effect on active image */
          transition: transform 0.5s ease;
        }
        .slick-prev, .slick-next {
          z-index: 1; /* Ensure arrows are above the images */
        }
      `}</style>
    </div>
  );
};

export default MobileSlider;

