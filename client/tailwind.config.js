const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require('tailwind-scrollbar')],
};



// const flowbite = require("flowbite-react/tailwind");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     flowbite.content(),
//   ],
//   theme: {
//          extend: {},
//        },
//   plugins: [flowbite.plugin(),require('tailwind-scrollbar'),],
// };


// /** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
// export default {
  
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin(),require('tailwind-scrollbar'),],
// }

//const flowbite = require("flowbite-react/tailwind");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     flowbite.content(),
//   ],
//   plugins: [
//     // ...
//     flowbite.plugin(),
//   ],
// };


//this is whats in the github
// /** @type {import('tailwindcss').Config} */ 
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin'),
//     require('tailwind-scrollbar'),
//   ],
// };
