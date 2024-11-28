import React from 'react'
import { useLocation } from 'react-router-dom';

//importing icons
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar() {
    const location=useLocation()
    
    const isActive=(currentPath)=>{
      return location.pathname===currentPath
    }

  return (
    <div>
       <div className='md:flex hidden bg-darkblue justify-around items-center'>
           <div className='flex items-center'>
               <span className='py-2 px-4 hover:text-white cursor-pointer border-r border-l text-gray-300 border-white'><XIcon style={{fontSize:".9rem"}}></XIcon></span>
               <span className='py-2 px-4 hover:text-white cursor-pointer border-r text-gray-300 border-white'><FacebookOutlinedIcon style={{fontSize:".9rem"}}></FacebookOutlinedIcon></span>
               <span className='py-2 px-4 hover:text-white cursor-pointer border-r text-gray-300 border-white'><InstagramIcon style={{fontSize:".9rem"}}></InstagramIcon></span>
               <span className='py-2 px-4 hover:text-white cursor-pointer border-r text-gray-300 border-white'><LinkedInIcon style={{fontSize:".9rem"}}></LinkedInIcon></span>
           </div>
           <div className='flex items-center'>
               <a href='tel:+917874510328' className='flex py-2 px-4 border-r border-l items-center gap-2'>
                 <span className='text-white'><LocalPhoneIcon style={{fontSize:".9rem"}}></LocalPhoneIcon></span>
                 <span className='text-gray-300 text-sm'>+91-7874510328</span>
               </a>
               <a href='mailto:techsbuilds.com' className='flex py-2 px-4 border-r items-center gap-2'>
                 <span className='text-white'><EmailIcon style={{fontSize:'.9rem'}}></EmailIcon></span>
                 <span className='text-gray-300 text-sm'>techsbuilds@gmail.com</span>
               </a>
           </div>
       </div>
       <div className="flex h-20 border items-center justify-around">
             <div>
               <span className="text-2xl font-bold">TechsBuilds</span>
             </div>
            <div className="flex gap-2 h-full">
                <div className={`${isActive('/') && "border-b-bluelight border-b-2"} hover:border-b-bluelight hover:border-b-2 cursor-pointer h-full px-6 font-bold flex items-center justify-center`}>
                  Home
                </div>
                <div className={`${isActive('/company') && "border-b-bluelight border-b-2"} hover:border-b-bluelight hover:border-b-2 cursor-pointer h-full px-6 font-bold flex items-center justify-center`}>
                 Services
                </div>
                <div className={`${isActive('/services') && "border-b-bluelight border-b-2"} hover:border-b-bluelight hover:border-b-2 cursor-pointer h-full px-6 font-bold flex items-center justify-center`}>
                  About Us
                </div>
                <div className={`${isActive('/contacts') && "border-b-bluelight border-b-2"} hover:border-b-bluelight hover:border-b-2 cursor-pointer h-full px-6 font-bold flex items-center justify-center`}>
                  Contacts
                </div>
             </div>
             <button className="p-2 transition-all bg-bluelight font-semibold hover:bg-purple text-white rounded-md">
                Get In Touch
             </button>
        </div>
    </div>
  )
}
