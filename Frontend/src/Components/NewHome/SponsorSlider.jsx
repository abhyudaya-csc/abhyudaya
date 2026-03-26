import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import currentSponsors from "./currentSponser";

import "swiper/css";
import "swiper/css/autoplay";

const SponsorSlider = () => {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-none flex-col justify-center px-2 py-10 sm:px-4 lg:px-2">
      <h2 className="mb-8 text-center font-enchanted text-4xl tracking-[0.12em] text-[#f3e9cf] sm:text-5xl">
        Our Sponsors
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {currentSponsors.map((sponsor, index) => (
          <SwiperSlide key={index} className="flex justify-center py-4">
            <div className="rounded-2xl border border-[#e5d7b5]/35 bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="mx-auto h-40 w-40 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorSlider;