import React from "react";
import image from "../assets/web-dev-icon.png";
import ANDROID from '../assets/android (1).png'
import DESIGN from '../assets/design.png'
import ITSERVICE from '../assets/it-service.png'
import SERVER from '../assets/servers.png'
import DEDICATE from '../assets/laptop (1).png'

const Services = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 my-12">
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
            <img src={image} className="w-20" alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Web Development</p>
            <p className="text-gray-700 text-base mt-3">
            Modern web development using the latest technologies like React, Node.js & more.
            </p>
          </div>
        </div>

        {/* Service Card */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={ANDROID} className="w-20" alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Mobile Development</p>
            <p className="text-gray-700 text-base mt-3">
            We build fast, user-friendly mobile apps for iOS and Android to help your business grow.
            </p>
          </div>
        </div>

        {/* Service Card */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={DESIGN} className="w-20" alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">UI/UX Design</p>
            <p className="text-gray-700 text-base mt-3">
            We design intuitive, responsive interfaces that enhance user experience and engagement.
            </p>
          </div>
        </div>

        {/* Additional cards */}
        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={DEDICATE} className="w-20" alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">QA & Testing</p>
            <p className="text-gray-700 text-base mt-3">
            We ensure bug-free, reliable performance through rigorous testing and quality checks.
            </p>
          </div>
        </div>

        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={ITSERVICE} className="w-20" alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">IT Consultancy</p>
            <p className="text-gray-700 text-base mt-3">
            Expert guidance to help you plan, optimize, and scale your IT solutions effectively.
            </p>
          </div>
        </div>

        <div className="flex p-6 shadow-lg rounded-lg bg-white">
          <div>
            <img src={SERVER} className="w-20" alt="Service Icon" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Dedicated Servers</p>
            <p className="text-gray-700 text-base mt-3">
            Powerful, secure, and fully managed servers tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
