import React from "react";
import image from "../assets/web-dev-icon.png";

const Services = () => {
  return (
    <div className="mt-8 w-full px-4 sm:px-8 md:px-16 mb-5">
      <div className="flex flex-col text-start">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <p className="text-purple-600 font-extrabold text-sm sm:text-base uppercase">
            Our Services
          </p>
          <div className="mt-4 sm:mt-0">
            <button className="px-6 py-4 bg-bluelight text-white text-sm font-medium shadow-md hover:bg-purple-700 transition duration-200">
              About Us
            </button>
          </div>
        </div>

        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl sm:w-2/3 mt-6 font-extrabold leading-snug">
          We Offer a Wide <br />
          Variety Of IT Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={image} width={100} alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Web Development</p>
            <p className="text-gray-700 text-base mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ex deserunt, accusamus voluptate quos ullam.
            </p>
          </div>
        </div>

        {/* Service Card */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={image} width={100} alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Mobile Development</p>
            <p className="text-gray-700 text-base mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ex deserunt, accusamus voluptate quos ullam.
            </p>
          </div>
        </div>

        {/* Service Card */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={image} width={100} alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">UI/UX Design</p>
            <p className="text-gray-700 text-base mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ex deserunt, accusamus voluptate quos ullam.
            </p>
          </div>
        </div>

        {/* Additional cards */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={image} width={100} alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">QA & Testing</p>
            <p className="text-gray-700 text-base mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ex deserunt, accusamus voluptate quos ullam.
            </p>
          </div>
        </div>

        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={image} width={100} alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">IT Consultancy</p>
            <p className="text-gray-700 text-base mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ex deserunt, accusamus voluptate quos ullam.
            </p>
          </div>
        </div>

        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={image} width={100} alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Dedicated</p>
            <p className="text-gray-700 text-base mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ex deserunt, accusamus voluptate quos ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
