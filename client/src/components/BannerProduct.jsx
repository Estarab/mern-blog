import React, { useEffect, useState } from 'react'
import image1 from '../assets/banner/slide1.jpeg'
import image2 from '../assets/banner/slide2.jpeg'
import image3 from '../assets/banner/slide3.jpeg'
import image4 from '../assets/banner/slide4.jpeg'
import image5 from '../assets/banner/slide5.jpg'


 import image1Mobile from '../assets/banner/slide1_mobile.jpeg'
 import image2Mobile from '../assets/banner/slide2_mobile.jpeg'
 import image3Mobile from '../assets/banner/slide3_mobile.jpeg'
 import image4Mobile from '../assets/banner/slide4_mobile.jpeg'
 import image5Mobile from '../assets/banner/slide5_mobile.jpg'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
       image4,
        image5
    ]

    const mobileImages = [
         image1Mobile,
         image2Mobile,
         image3Mobile,
         image4Mobile,
         image5Mobile
    ]

    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage != 0){
            setCurrentImage(preve => preve - 1)
        }
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return ()=> clearInterval(interval)
    },[currentImage])

  return (
    
     <div className='container mx-auto px-4 rounded mt-0  '>
      {/* <div className='w-full overflow-hidden bg-gradient-to-r  from-purple-500 via-white to-blue-400 '>   */}
        <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                    <div className=' flex justify-between w-full text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    </div>
                </div>

                {/**desktop and tablet version */}
              <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full'/>
                            </div>
                            )
                        })
                }
              </div>


                {/**mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                            </div>
                            )
                        })
                }
              </div>


        </div>
    </div>

  )
 
}

export default BannerProduct