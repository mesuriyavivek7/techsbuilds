import React from "react";

//Importing images
import IMG1 from '../assets/asset8.png'
import IMG2 from '../assets/asset9.png'
import IMG3 from '../assets/asset10.jpg'

const Aboutus = () => {
  return (
    <div className="md:my-12 md:mx-20 mx-4 my-6">
      <div className="flex flex-col sm:flex-row items-start gap-16">
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-purple-600 font-extrabold text-sm md:text-base">
            // ABOUT COMPANY
          </p>
          <h2 className="font-extrabold md:text-4xl text-3xl mb-2">
            Your Partner for <br></br> Software Inovation
          </h2>
          <p className="font-light text-gray-900 mb-6 text-justify">
            TechsBuilds is the partner of choice for the world's leading
            enterprises, SMEs, and technology challengers. We help businesses
            elevate their value through custom software development, product
            design, QA, and consultancy services.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-8 w-full">
            <div className="w-full sm:w-1/2">
               <div className="flex flex-col gap-2">
                <img src={IMG1} alt="experience" className="w-10 h-10"></img>
                <p className="font-medium">Experience</p>
              </div>
              <div className="border w-3/4 h-1 bg-gray-300/55 mt-2"></div>
              <p className="text-xs sm:text-base text-gray-600/90 mt-4">
                Our great team of more than 1400 software experts.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col gap-2">
                <img src={IMG2} alt="support" className="w-10 h-10"></img>
                <p className="font-medium">Quick Support</p>
              </div>
              <div className="w-3/4 h-1 bg-gray-300/55 mt-2"></div>
              <p className="text-xs text-gray-600/90 mt-4 sm:text-base">
                We'll help you test bold new ideas while sharing our expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 md:w-1/3 sm:block">
          <img src={IMG3} alt="About Us" className="w-full md:h-[24rem] h-full object-cover shadow-md" />
          <button className="text-bluelight/80 text-sm font-bold mt-10 cursor-pointer hover:underline">
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
