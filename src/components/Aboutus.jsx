import React from "react";
import image from "../assets/company-about.jpg";

const Aboutus = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row  flex-wrap justify-start gap-20">
        {/* Text Content */}
        <div className="ml-6 sm:ml-10 mt-10 flex flex-col max-w-lg">
          <p className="text-purple-600 font-extrabold text-xs">
            // ABOUT COMPANY
          </p>
          <h2 className="font-bold text-2xl pt-4 pb-6">
            Our Partner for Software Innovation
          </h2>
          <p className="font-light text-gray-900 mb-6 text-justify">
            TechsBuilds is the partner of choice for the world's leading
            enterprises, SMEs, and technology challengers. We help businesses
            elevate their value through custom software development, product
            design, QA, and consultancy services.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-8 w-full">
            <div className="w-full sm:w-1/2">
              <p className="font-medium">Experience</p>
              <div className="border w-3/4 h-1 bg-gray-300/55 mt-2"></div>
              <p className="text-xs sm:text-sm text-gray-600/90 mt-4">
                Our great team of more than 1400 software experts.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="font-medium">Quick Support</p>
              <div className="border w-3/4 h-1 bg-gray-300/55 mt-2"></div>
              <p className="text-xs text-gray-600/90 mt-4 sm:text-sm">
                We'll help you test bold new ideas while sharing our expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 sm:block sm:mt-16 sm:ml-6">
          <img src={image} alt="About Us" className="w-full h-auto shadow-md" />
          <button className="text-bluelight/80 text-sm font-bold mt-10 cursor-pointer hover:underline">
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
