import React from 'react'

//Importing icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
       <div className="flex m-auto items-center justify-around  bg-cover w-full h-[180px] md:h-[300px] bg-center bg-[url('https://res.cloudinary.com/djxavfpqc/image/upload/v1734104989/pexels-shvets-production-8037008_umx1mw.jpg')]">
         <h1 className='text-white text-3xl md:text-4xl font-black'>Contact Us</h1>
         <div className='flex items-center gap-1'>
             <Link to={'/'}><span className='text-gray-400 md:text-base text-sm font-bold'>HOME</span></Link>
             <span className='text-bluelight'><ArrowRightIcon style={{fontSize:"1.8rem"}}></ArrowRightIcon></span>
             <span className='font-bold text-white'>Contact US</span>
         </div>
      </div>
      <div className='my-16 flex justify-center items-center'>
          <div className='w-11/12 md:w-4/5 flex md:flex-row flex-col items-center gap-10'>
             <div className='flex-1 flex flex-col gap-2'>
                 <span className='text-base font-bold text-purple'># CONTACT DETAILS</span>
                 <h1 className='text-3xl font-extrabold'>Contact Us</h1>
                 <p className='text-gray-600 leading-7'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                 <div className='p-4 flex items-center gap-3'>
                    <span className='text-slate-500'><LocationOnIcon style={{fontSize:'2.2rem'}}></LocationOnIcon></span>
                    <div className='flex flex-col gap-1.5'>
                        <span className='font-bold text-lg'>Our Address:</span>
                        <span>521 Navratna Corporate Park, Ashok Vatika, Bopal-Ambali Road, Ahmedabad - 380058.</span>
                    </div>
                 </div>
                 <div className='p-4 flex items-center gap-3'>
                    <span className='text-slate-500'><EmailIcon style={{fontSize:'2.2rem'}}></EmailIcon></span>
                    <div className='flex flex-col gap-1.5'>
                        <span className='font-bold text-lg'>Our MailBox:</span>
                        <span>techsbuilds@gmail.com</span>
                    </div>
                 </div>
                 <div className='p-4 flex items-center gap-3'>
                    <span className='text-slate-500'><LocalPhoneIcon style={{fontSize:"2.2rem"}}></LocalPhoneIcon></span>
                    <div className='flex flex-col gap-1.5'>
                        <span className='font-bold text-lg'>Our Phone:</span>
                        <span>+91 7874510328</span>
                    </div>
                 </div>
             </div>
             <div className='px-8 py-12 bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-80 flex-1 flex flex-col gap-2'>
                <h1 className='font-black tracking-wide text-3xl md:text-4xl text-white'>Ready to Get Started?</h1>
                <span className='font-semibold text-white'>Your email address will not be published. Required fields are marked *</span>
                <form action="https://formspree.io/f/xjkvdqvy" method="POST" className='mt-4 flex flex-col gap-8 w-full'>
                    <input type='text' name='name' className='bg-transparent w-full p-1 text-white outline-none border-b border-white' placeholder='Your Name *' required></input>
                    <input type='email' name='email' className='bg-transparent w-full p-1 text-white outline-none border-b border-white' placeholder='Your Email *' required></input>
                    <textarea name='message' placeholder='Your Message...' rows={5} className='bg-transparent resize-none w-full p-1 text-white outline-none border-b border-white'></textarea>
                    <div className='flex place-content-start'>
                       <button type='submit' className='p-2 w-72 hover:bg-darkblue transition-colors duration-300 hover:text-white bg-white font-bold text-lg mt-2'>SUBMIT</button>
                    </div>
                </form>
                
             </div>
          </div>
      </div>
    </>
  )
}
