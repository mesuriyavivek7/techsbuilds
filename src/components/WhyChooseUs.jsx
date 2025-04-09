import React from 'react'

//importing icons
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

//Importing images
import ICON1 from '../assets/asset4.png'
import ICON2 from '../assets/asset5.png'
import ICON3 from '../assets/asset7.png'
import ICON4 from '../assets/asset6.png'



export default function WhyChooseUs() {
    return (
    <div className='md:h-[800px] h-[2000px]'>
        <div className='relative h-3/4 flex my-12 justify-center bg-darkpurple items-center'>
            <div className='absolute top-10 flex flex-col my-4 gap-2 items-center'>
                <h4 className='text-textpurple'># WHY CHOOSE US</h4>
                <h1 className='text-center text-3xl md:text-4xl font-bold text-white'>Design the Concept <br></br> of Your Business Idea Now</h1>
    
                <div className='mt-12 w-4/5 grid grid-cols-1 md:grid-cols-4 gap-5'>
                    <div className='group hover:bg-white transition-colors duration-300 relative overflow-hidden bg-midpurple border border-textpurple flex flex-col gap-3 h-72 px-8 py-12'>
                        <h1 className='group-hover:text-black transition-colors duration-300 text-2xl z-20 text-white font-black'>Product Design</h1>
                        <p className='group-hover:text-black transition-colors duration-300 text-textpurple text-base'>Our product design process blends technology, usability, and creativity to deliver innovative digital experiences that are scalable and future-ready.</p>
                        <button className='w-28 mt-4 text-bluelight'><ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon> Learn More</button>
                        <span className='absolute z-10 text-7xl text-purplegray/20 font-anton tracking-wider font-bold top-0 left-0'>01</span>
                        <div className='group-hover:bg-bluelight transition-colors duration-300 w-52 h-52 z-10 rounded-full bg-purplegray/20 absolute top-44 left-44'></div>
                        <img src={ICON1} alt='icons' className='absolute z-20 top-56 right-6 h-10 w-10 invert'></img>
                    </div>
                    <div className='group hover:bg-white transition-colors duration-300 relative overflow-hidden bg-midpurple border border-textpurple flex flex-col gap-3 h-72 px-8 py-12'>
                        <h1 className='group-hover:text-black transition-colors duration-300 text-2xl z-20 text-white font-black'>Development</h1>
                        <p className='group-hover:text-balck transition-colors duration-300 text-textpurple text-base'>Clean code, smart architecture, and fast performance — our development team brings your product to life with cutting-edge technology and agile execution.</p>
                        <button className='w-28 mt-4 text-bluelight'><ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon> Learn More</button>
                        <span className='absolute z-10 text-7xl text-purplegray/20 font-anton tracking-wider font-bold top-0 left-0'>02</span>
                        <div className='group-hover:bg-bluelight transition-colors duration-300 w-52 h-52 z-10 rounded-full bg-purplegray/20 absolute top-44 left-44'></div>
                        <img src={ICON2} alt='icons' className='absolute z-20 top-56 right-6 h-10 w-10 invert'></img>
                    </div>
                    <div className='group hover:bg-white transition-colors duration-300 relative overflow-hidden bg-midpurple border border-textpurple flex flex-col gap-3 h-72 px-8 py-12'>
                        <h1 className='group-hover:text-black transition-colors duration-300 text-2xl z-20 text-white font-black'>Data Analytics</h1>
                        <p className='text-textpurple text-base'>Your data tells a story — we help you read it. With our data analytics solutions, you can track performance, understand customer behavior, and make confident business moves backed by facts, not guesswork.</p>
                        <button className='w-28 mt-4 text-bluelight'><ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon> Learn More</button>
                        <span className='absolute z-10 text-7xl text-purplegray/20 font-anton tracking-wider font-bold top-0 left-0'>03</span>
                        <div className='group-hover:bg-bluelight transition-colors duration-300 w-52 h-52 z-10 rounded-full bg-purplegray/20 absolute top-44 left-44'></div>
                        <img src={ICON3} alt='icons' className='absolute z-20 top-56 right-6 h-10 w-10 invert'></img>
                    </div>
                    <div className='group hover:bg-white transition-colors duration-300 relative overflow-hidden bg-midpurple border border-textpurple flex flex-col gap-3 h-72 px-8 py-12'>
                        <h1 className='group-hover:text-black transition-colors duration-300 text-2xl z-20 text-white font-black'>Cyber Security</h1>
                        <p className='text-textpurple text-base'>Secure. Detect. Respond. We offer advanced cybersecurity services including penetration testing, cloud security, endpoint protection, and 24/7 threat monitoring — all tailored to your business.</p>
                        <button className='w-28 mt-4 text-bluelight'><ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon> Learn More</button>
                        <span className='absolute z-10 text-7xl text-purplegray/20 font-anton tracking-wider font-bold top-0 left-0'>04</span>
                        <div className='group-hover:bg-bluelight transition-colors duration-300 w-52 h-52 z-10 rounded-full bg-purplegray/20 absolute top-44 left-44'></div>
                        <img src={ICON4} alt='icons' className='absolute z-20 top-56 right-6 h-10 w-10 invert'></img>
                    </div>
                </div>
                <div className='mt-3 w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                   <div className="relative h-60 bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1733745305/pexels-tranmautritam-225502_nix2ut.jpg')] bg-cover bg-center">
                      <div className='absolute z-10 inset-0 bg-black bg-opacity-50'></div>
                      <div className='absolute top-8 left-8 flex z-20 flex-col gap-2'>
                        <h1 className='text-5xl text-white font-black'>4+</h1>
                        <span className='text-lg font-extrabold text-white'>Countries Worldwide</span>
                        <p className='text-base text-white'>To succeed, every software solution must be deeply integrated into the existing tech environment..</p>
                      </div>
                   </div>

                   <div className="relative h-60 bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1733745305/pexels-vojtech-okenka-127162-392018_y0jqgj.jpg')] bg-cover bg-center">
                      <div className='absolute z-10 inset-0 bg-black bg-opacity-50'></div>
                      <div className='absolute top-8 left-8 flex z-20 flex-col gap-2'>
                        <h1 className='text-5xl text-white font-black'>10+</h1>
                        <span className='text-lg font-extrabold text-white'>Happy Customers</span>
                        <p className='text-base text-white'>Our clients are at the heart of everything we do.</p>
                      </div>
                   </div>
                </div>
            </div>
        </div>
     </div>
      )
}
