import image1 from '../assets/stakeholders/sk.jpeg'
import image2 from '../assets/stakeholders/stakeholder.jpeg'
import image3 from '../assets/stakeholders/stakeholder1.jpeg'


const OurPartners = () => {
    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">StakeHolders</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                
                    <div className="text-center">
                        <img
                             src={image1}
                          

                            
                            className="mx-auto h-40 w-40 rounded-full object-cover"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-700">Abraham Israel</h3>
                    </div>
                
                    <div className="text-center">
                        <img
                             src={image2}
                          

                            
                            className="mx-auto h-40 w-40 rounded-full object-cover"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-700">Harriet Nakapizye</h3>
                    </div>
                
                    <div className="text-center">
                        <img
                             src={image3}
                          

                            
                            className="mx-auto h-40 w-40 rounded-full object-cover"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-700">Monde Rita Nguni</h3>
                    </div>
                
            </div>
        </div>
    );
};

export default OurPartners;



// const partners = [
//     { id: 1, name: 'Partner One', imageUrl: '/client/public/images' },
//     { id: 2, name: 'Partner Two', imageUrl: 'path_to_image2.jpg' },
//     { id: 3, name: 'Partner Three', imageUrl: 'path_to_image3.jpg' },
//     // Add more partners as needed
// ];

// const OurPartners = () => {
//     return (
//         <div className="bg-white py-12">
//             <h2 className="text-3xl font-extrabold text-center text-gray-900">StakeHolders</h2>
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                 {partners.map((partner) => (
//                     <div key={partner.id} className="text-center">
//                         <img
//                              src={partner.imageUrl}
                          

//                             alt={partner.name}
//                             className="mx-auto h-40 w-40 rounded-full object-cover"
//                         />
//                         <h3 className="mt-4 text-lg font-medium text-gray-700">{partner.name}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurPartners;
