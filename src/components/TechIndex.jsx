import React from 'react'

//Importing images
import IMG1 from '../assets/saas.png'
import IMG2 from '../assets/web-programming.png'
import IMG3 from '../assets/apple.png'
import IMG4 from '../assets/android.png'
import IMG5 from '../assets/process.png'
import IMG6 from '../assets/server.png'

export default function TechIndex() {

  return (
     <div className="my-12 flex justify-center items-center relative w-full bg-fixed h-[1200px] md:h-[500px] bg-cover bg-center bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1733749795/pexels-fauxels-3183186_kodalr.jpg')]">
          <div className='bg-black z-10 bg-opacity-60 absolute inset-0'></div>
          <div className='md:w-4/5 w-11/12 absolute z-20 flex flex-col gap-2 items-center'>
               <span className='text-white text-lg'># TechIndex</span>
               <h1 className='text-white text-center font-black text-2xl md:text-3xl'>We Deliver Solution  <br></br>
                the Goal of Trusting Relationships</h1>
                <div className='w-full mt-5 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 items-center'>
                     <div className='h-36 hover:bg-bluelight hover:border-none transition-colors duration-300 flex justify-center items-center p-4 border border-white'>
                        <div className='flex flex-col items-center gap-1'>
                             <img src={IMG2} alt='web' className='w-12 h-12'></img>
                             <span className='text-white text-lg font-extrabold'>WEB</span>
                        </div>
                     </div>
                     <div className='h-36 hover:bg-bluelight hover:border-none transition-colors duration-300 flex justify-center items-center p-4 border border-white'>
                        <div className='flex flex-col items-center gap-1'>
                             <img src={IMG4} alt='android' className='w-12 h-12'></img>
                             <span className='text-white text-lg font-extrabold'>ANDROID</span>
                        </div>
                     </div>
                     <div className='h-36 hover:bg-bluelight hover:border-none transition-colors duration-300 flex justify-center items-center p-4 border border-white'>
                        <div className='flex flex-col items-center gap-1'>
                             <img src={IMG3} alt='apple' className='w-12 h-12'></img>
                             <span className='text-white text-lg font-extrabold'>APPLE</span>
                        </div>
                     </div>
                     <div className='h-36 hover:bg-bluelight hover:border-none transition-colors duration-300 flex justify-center items-center p-4 border border-white'>
                        <div className='flex flex-col items-center gap-1'>
                             <img src={IMG5} alt='hybrid' className='w-12 h-12'></img>
                             <span className='text-white text-lg font-extrabold'>HYBRID</span>
                        </div>
                     </div>
                     <div className='h-36 hover:bg-bluelight hover:border-none transition-colors duration-300 flex justify-center items-center p-4 border border-white'>
                        <div className='flex flex-col items-center gap-1'>
                             <img src={IMG6} alt='cloud' className='w-12 h-12'></img>
                             <span className='text-white text-lg font-extrabold'>CLOUD</span>
                        </div>
                     </div>
                     <div className='h-36 hover:bg-bluelight hover:border-none transition-colors duration-300 flex justify-center items-center p-4 border border-white'>
                        <div className='flex flex-col items-center gap-1'>
                             <img src={IMG1} alt='saas' className='w-12 h-12'></img>
                             <span className='text-white text-lg font-extrabold'>SAAS</span>
                        </div>
                     </div>
                </div>
          </div>

     </div>
    
  )
}
