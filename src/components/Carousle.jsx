import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules"; // Include Autoplay
import "swiper/css";
import "swiper/css/effect-fade";

// Importing images
import IMG1 from "../assets/asset1.jpg";
import IMG2 from "../assets/asset2.jpg";
import IMG3 from "../assets/asset3.jpg";

export default function Carousle() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]} // Include Autoplay here
      effect="fade"
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }} // Works only with Autoplay module
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full md:h-[650px] relative">
          <img
            src={IMG1}
            alt="Slide 1"
            className="w-full object-cover h-full"
          />

          <div className="md:text-[5rem] text-3xl absolute z-30 top-1/4 md:top-[8rem] left-10 md:left-20 flex flex-col text-white gap-4">
            <span className="sm:text-lg md:text-2xl tracking-wider">
              # Full Cycle Development
            </span>
            <h1 className="text-3xl leading-[2.5rem] tracking-wide font-archivo md:text-7xl md:leading-[5rem]">
              FROM IDEA <br /> TO PRODUCT
            </h1>

            <p className="text-sm md:text-xl">
              We are 100+ professional software engineers with more than 10
              years of experience.
            </p>
            <button className="px-4 py-2 hover:bg-purple transition-all text-white text-sm md:text-lg bg-bluelight w-32 md:w-36 mt-2">
              Learn More
            </button>
          </div>

          {/* Black Overlay */}
          <div className="absolute z-20 inset-0 bg-black bg-opacity-50"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full md:h-[650px] relative">
          <img
            src={IMG2}
            alt="Slide 2"
            className="w-full object-cover h-full"
          />

          {/* content */}
          <div className="absolute z-30 top-[8rem] left-20 flex flex-col text-white gap-4">
            <span className="text-2xl tracking-wider">
              # We Created Leading Digital Products
            </span>
            <h1 className="text-[5rem] leading-[5rem] tracking-wide font-archivo">
              END TO END <br /> DEVELOPMENT
            </h1>
            <p className="text-xl">
              We are 100+ professional software engineer with more than 10 year+
              experience.
            </p>
            <button className="px-2 py-3 hover:bg-purple transition-all text-white text-lg bg-bluelight w-36 mt-2">
              Learn More
            </button>
          </div>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full md:h-[650px] relative">
          <img
            src={IMG3}
            alt="Slide 3"
            className="w-full object-cover h-full"
          />

          {/* content */}
          <div className="absolute z-30 top-[8rem] left-20 flex flex-col text-white gap-4">
            <span className="text-2xl tracking-wider">
              # Only High Quality Services
            </span>
            <h1 className="text-[5rem] leading-[5rem] tracking-wide font-archivo">
              SOFTWARE IT <br /> OUTSOURCING
            </h1>
            <p className="text-xl">
              We are 100+ professional software engineer with more than 10 year+
              experience.
            </p>
            <button className="px-2 py-3 hover:bg-purple transition-all text-white text-lg bg-bluelight w-36 mt-2">
              Learn More
            </button>
          </div>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
