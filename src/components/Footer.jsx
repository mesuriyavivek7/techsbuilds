import React from "react";

import image from "../assets/earth.png";

// Importing icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  
    return (
      <div className="w-full bg-[#211e3b] py-10 flex flex-col items-center justify-center">
        {/* Company Name */}
        <div className="sm:ml-10 ml-2 sm:mt-14 mb-6">
          <p className="text-white font-bold text-2xl sm:text-3xl">Techsbuilds</p>
        </div>
  
        {/* Contact Info */}
        <div className="flex flex-wrap justify-evenly gap-8 sm:gap-24 text-white w-full px-4 sm:px-10 sm:mt-6">
          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src={image}
              className="w-10 h-10 sm:w-12 sm:h-12"
              alt="Company Address Icon"
            />
            <p className="text-xs sm:text-sm">123 Tech Street, BuildCity</p>
            <p className="font-semibold text-sm sm:text-base">Our Address</p>
          </div>
  
          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src={image}
              className="w-10 h-10 sm:w-12 sm:h-12"
              alt="Email Icon"
            />
            <p className="text-xs sm:text-sm">contact@techsbuilds.com</p>
            <p className="font-semibold text-sm sm:text-base">Our Mailbox</p>
          </div>
  
          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src={image}
              className="w-10 h-10 sm:w-12 sm:h-12"
              alt="Phone Icon"
            />
            <p className="text-xs sm:text-sm">+1 (234) 567-890</p>
            <p className="font-semibold text-sm sm:text-base">Our Phone</p>
          </div>
        </div>
  
        {/* Footer Info */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs sm:text-sm text-gray-400">
            ©️ 2024 Techsbuilds. All rights reserved.
          </p>
        </div>
  
        {/* Navigation Links */}
        <div className="mt-6 sm:mt-16">
          <div className="hidden sm:flex sm:gap-6 sm:text-white sm:font-semibold sm:text-sm lg:text-lg">
            <a href="##" className="hover:underline">
              Home
            </a>
            <a href="##" className="hover:underline">
              Services
            </a>
            <a href="##" className="hover:underline">
              Portfolio
            </a>
            <a href="##" className="hover:underline">
              Blog
            </a>
            <a href="##" className="hover:underline">
              Contacts
            </a>
          </div>
        </div>
  
        {/* Social Media Icons */}
        <div className="mt-6">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white justify-center">
            <a
              href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Cfb%20sign%20up%7C&placement=&creative=589460569891&keyword=fb%20sign%20up&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-294779041346%26loc_physical_ms%3D9061748%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp45xEfnih6NkNEyxV74dWg8tGiiukGkUffCsAbiRO9UHrMAZus4XIcPRoCKYEQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-transform transform hover:scale-110"
            >
              <FacebookOutlinedIcon fontSize="medium" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <InstagramIcon fontSize="medium" />
            </a>
            <a
              href="https://www.linkedin.com/company/techsbuilds/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
          </div>
        </div>
      </div>
  )
}
