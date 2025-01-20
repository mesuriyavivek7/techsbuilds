import React from 'react'
import { Link } from 'react-router-dom'

//Import Icons
import REACT from '../assets/react.png'
import JAVA from '../assets/java.png'
import NODEJS from '../assets/nodejs.png'
import SWIFT from '../assets/swift.png'
import ANGULER from '../assets/anguler.png'
import PYTHON from '../assets/python.png'
import PHP from '../assets/php.png'
import AI from '../assets/ai.png'
import FLUTTER from '../assets/flutter.png'
import REACTNATIVE from '../assets/reactnative.png'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function About() {
  return (
    <>
    <div className="flex m-auto items-center justify-around  bg-cover w-full h-[180px] md:h-[300px] bg-center bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1734009426/pexels-rquiros-2330137_sqixd3.jpg')]">
         <h1 className='text-white text-3xl md:text-4xl font-black'>About Us</h1>
         <div className='flex items-center gap-1'>
             <Link to={'/'}><span className='text-gray-400 md:text-base text-sm font-bold'>HOME</span></Link>
             <span className='text-bluelight'><ArrowRightIcon style={{fontSize:"1.8rem"}}></ArrowRightIcon></span>
             <span className='font-bold text-white'>ABOUT US</span>
         </div>
    </div>
    <div className='my-12 flex justify-center'>
        <div className='w-4/5 flex flex-col md:flex-row gap-10 md:items-center'>
           <div className='md:flex-1 flex flex-col gap-4'>
              <span className='text-purple font-bold'># WHAT WE OFFER</span>
              <h1 className='text-4xl font-black'>Your Partner for <br></br> Software Innovation</h1>
              <p className='text-base leading-7 text-gray-500 font-sans'>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
              <span className='font-bold text-lg italic'>We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.</span>
           </div>
           <div className='md:flex-1 h-[300px]  md:h-[450px] flex flex-col gap-4'>
               <div className='w-full h-1/2 flex place-content-end'>
                  <div className="w-4/5 group flex justify-center items-center relative h-full bg-center bg-cover bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1734017562/pexels-pixabay-39284_ttthk8.jpg')]">
                      <h1 className='z-20 group-hover:text-bluelight transition-colors duration-300 text-3xl font-bold text-white'>Our Mission</h1>
                      <div className='absolute z-10 group-hover:left-full transition-all duration-300 inset-0 bg-black bg-opacity-50'></div>
                  </div>
               </div>
               <div className='w-full h-1/2 flex place-content-start'>
                    <div className="w-4/5 group flex justify-center items-center relative h-full bg-center bg-cover bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1734017579/pexels-fauxels-3183145_cikm89.jpg')]">
                      <h1 className='z-20 group-hover:text-bluelight transition-colors duration-300 text-3xl font-bold text-white'>Our Vision</h1>
                      <div className='absolute z-10 group-hover:right-full transition-all duration-300 inset-0 bg-black bg-opacity-50'></div>
                    </div>
               </div>
           </div>
        </div>
    </div>
    <div className='w-full py-6 px-6 bg-gray-100 my-16 grid grid-cols-3 md:grid-cols-10 gap-4 md:gap-1'>
       <div className='group flex gap-1.5 items-center'> 
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={REACT} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>REACT</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={NODEJS} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>NODEJS</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={JAVA} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>JAVA</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={ANGULER} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>ANGULER</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={SWIFT} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>SWIFT</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={PYTHON} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>PYTHON</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={AI} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>AI/ML</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={PHP} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>PHP</span>
       </div>
       <div className='group flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={FLUTTER} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>FLUTTER</span>
       </div>
       <div className='group hidden md:flex gap-1.5 items-center'>
          <img className='md:w-9 md:h-9 w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-500' src={REACTNATIVE} alt='react'></img>
          <span className='text-sm md:text-lg font-sans group-hover:invert-0  transition-all duration-500 invert font-semibold text-gray-600'>REACT NATIVE</span>
       </div>
    </div>
    <div className='my-16 flex justify-center items-center'>
       <div className='w-4/5 flex flex-col gap-4 items-center'>
          <span className='text-lg text-purple font-bold'>Team Members</span>
          <h1 className='text-center md:tracking-wide text-3xl md:text-4xl font-extrabold'>This Is Why Industry Our Team Is So <br></br> Famous!</h1>
          <div className='w-full mt-8 flex items-center justify-around'>
              <div className='flex flex-col gap-2 items-center'>
                 <h1 className='text-blue-600 font-medium text-3xl md:text-4xl font-archivo'>24+</h1>
                 <span className='text-sm md:text-lg'>Awards Won</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                 <h1 className='text-blue-600 font-medium text-3xl md:text-4xl font-archivo'>12+</h1>
                 <span className='text-sm md:text-lg'>Years Experience</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                 <h1 className='text-blue-600 font-medium text-3xl md:text-4xl font-archivo'>352+</h1>
                 <span className='text-sm md:text-lg'>Happy Clients</span>
              </div>
          </div>
       </div>
    </div>
    </>
  )
}
