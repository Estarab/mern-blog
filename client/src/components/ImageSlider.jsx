import React, { useState, useEffect } from 'react';
import image1 from '../assets/remember me/img1.jpg';
import image2 from '../assets/remember me/img2.jpg';
import image3 from '../assets/remember me/img3.jpg';
import image4 from '../assets/remember me/img4.jpg';
import image5 from '../assets/remember me/photorealistic-kid-refugee-camp.jpg';

const images = [
  { src: image1, title: "Empower Lives: The Remember Me Project", description: "Join us in making a difference in the lives of homeless individuals, ." },
  { src: image2, title: "Shelter and Care: A New Beginning", description: "Experience the journey of hope as we provide emergency shelter, nutritious meals, and medical care to those in need" },
  { src: image3, title: "Join the Movement: Your Support Matters!", description: "Your donation of just K1 a day can make a significant impact, helping us provide critical services and support" },
  { src: image4, title: "From Streets to Stability", description: "Witness the transition from homelessness to self-sufficiency through tailored support and ongoing case management" },
  { src: image5, title: "Healing Hearts: Mental Health Matters", description: "Prioritize mental health with dedicated services and support, helping individuals overcome challenges and build resilience." },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'transform scale-100 opacity-100'
              : 'transform scale-50 opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover filter brightness-75" // Use object-cover for professional fit
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center flex-col text-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{image.title}</h2>
            <p className="text-white text-lg md:text-xl max-w-lg drop-shadow-lg">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;


//  import React, { useState, useEffect } from 'react';
//  import image1 from '../assets/programs/job.jpg';
//  import image2 from '../assets/programs/support.jpg';
//  import image3 from '../assets/programs/Untitled.jpg';
// import image4 from '../assets/programs/program1-removebg-preview.png';
// import image5 from '../assets/programs/8ed65093-24cd-4dd0-96a7-667db0b72d6e.jpg';

// const images = [
//   { src: image1, title: "Empower Change", description: "Join us in making a difference in the lives of homeless individuals." },
//   { src: image2, title: "Rehabilitation Journey", description: "Help us provide shelter, healthcare, and vocational training." },
//   { src: image3, title: "Your Support Matters", description: "A small donation can change lives. Donate K1 a day!" },
//   { src: image4, title: "Community Integration", description: "Together, we can help integrate homeless individuals into society." },
//   { src: image5, title: "Hope and Dignity", description: "Restore hope and dignity to those in need." },
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//             index === currentIndex
//               ? 'transform scale-100 opacity-100'
//               : index === (currentIndex + 1) % images.length
//               ? 'transform scale-100 opacity-100'
//               : 'transform scale-50 opacity-0'
//           }`}
//         >
//           <img
//             src={image.src}
//             alt={image.title}
//             className="w-full h-full object-cover filter brightness-75" // Use object-cover for professional fit
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
//             <h2 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg hidden md:block">{image.title}</h2>
//             <p className="text-white text-lg md:text-xl max-w-lg drop-shadow-lg mt-40 md:mt-0">{image.description}</p>
//           </div>
//         </div>
//       ))}

//       {/* Navigation buttons */}
//       <button
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
//         onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
//       >
//         &#10094; {/* Left Arrow */}
//       </button>
//       <button
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
//         onClick={() => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
//       >
//         &#10095; {/* Right Arrow */}
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;




// // import React, { useState, useEffect } from 'react';
// // import image1 from '../assets/programs/job.jpg';
// // import image2 from '../assets/programs/support.jpg';
// // import image3 from '../assets/programs/Untitled.jpg';

// // const images = [
// //   { src: image1, title: "Empower Change", description: "Join us in making a difference in the lives of homeless individuals." },
// //   { src: image2, title: "Rehabilitation Journey", description: "Help us provide shelter, healthcare, and vocational training." },
// //   { src: image3, title: "Your Support Matters", description: "A small donation can change lives. Donate K1 a day!" },
// // ];

// // const ImageSlider = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 3000); // Change image every 3 seconds

// //     return () => clearInterval(intervalId);
// //   }, []);

// //   return (
// //     <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
// //       {images.map((image, index) => (
// //         <div
// //           key={index}
// //           className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
// //             index === currentIndex
// //               ? 'scale-100 opacity-100'
// //               : 'scale-75 opacity-0'
// //           }`}
// //         >
// //           <img
// //             src={image.src}
// //             alt={image.title}
// //             className="w-full h-full object-cover filter brightness-75" // Use object-cover for professional fit
// //           />
// //           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
// //             <h2 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{image.title}</h2>
// //             <p className="text-white text-lg md:text-xl max-w-lg drop-shadow-lg">{image.description}</p>
// //           </div>
// //         </div>
// //       ))}

// //       {/* Navigation buttons */}
// //       <button
// //         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
// //         onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
// //       >
// //         &#10094; {/* Left Arrow */}
// //       </button>
// //       <button
// //         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
// //         onClick={() => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
// //       >
// //         &#10095; {/* Right Arrow */}
// //       </button>
// //     </div>
// //   );
// // };

// // export default ImageSlider;
