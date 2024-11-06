import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from the assets folder
import image1 from '../assets/remember me/chiboly.jpeg';
import image2 from '../assets/remember me/img55.jpg';
import image3 from '../assets/remember me/img1.jpg';
import image4 from '../assets/slider/training.jpg';
import image5 from '../assets/remember me/img33.jpg';

const AboutSlider = () => {
  const images = [
    { src: image1, title: 'Reduce Homelessness and Treat Substance Abuse' },
    { src: image2, title: 'Empower the lives of Homeless street persons' },
    { src: image3, title: 'Support efforts to reconnect with supportive family members ' },
    { src: image4, title: 'Facilitate Vocational Training and Employment Support' },
    { src: image5, title: 'Provide Emergency Shelter and Immediate Care' },
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-teal-500">REMEMBER ME</h2>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-semibold text-center text-pink-600">{image.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutSlider;





// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Import images from the assets folder
// import image1 from '../assets/slider/pexels-abhishek-goel-153437-1362910.jpg';
// import image2 from '../assets/remember me/STREET-FMAILY.jpg';
// import image3 from '../assets/remember me/img1.jpg';
// import image4 from '../assets/about image/mission.jpeg';
// import image5 from '../assets/remember me/img33.jpg';

// const WhatWeDo = () => {
//   const images = [
//     { src: image1, title: 'Reduce Homelessness and Treat Substance Abuse' },
//     { src: image2, title: 'Empower the lives of Homeless street persons' },
//     { src: image3, title: 'Support efforts to reconnect with supportive family members ' },
//     { src: image4, title: 'Facilitate vocational training and employment support' },
//     { src: image5, title: 'Provide Emergency Shelter and Immediate Care' },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="w-full px-0 py-8 bg-slate-200"> {/* Removed container class */}
//       <h2 className="text-4xl font-bold text-center mb-6 text-teal-500">Remember Me</h2>
//       <div className="w-full overflow-hidden">
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index} className="flex flex-col items-center">
//               {/* Wrapper for image with full width and no clipping */}
//               <div className="w-full h-[400px] md:h-[500px]">
//                 <img
//                   src={image.src}
//                   alt={image.title}
//                   className="w-full h-full object-cover mb-4 brightness-100"  // Ensure image fits
//                   style={{ maxHeight: '500px' }} // Max height to avoid excessive stretching
//                 />
//               </div>
//               <h3 className="text-2xl font-semibold text-center text-teal-700 mt-4">{image.title}</h3>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <style jsx>{`
//         .slick-slide {
//           transition: transform 0.5s ease;
//         }
//         .slick-active img {
//           transform: scale(1.05); /* Slight zoom effect on active image */
//           transition: transform 0.5s ease;
//         }
//         .slick-prev, .slick-next {
//           z-index: 1; /* Ensure arrows are above the images */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WhatWeDo;
