// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import image
import art from "../../../assets/Banner/art.png";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={art} alt="Art" className="lg:h-[720px] w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={art} alt="Art" className="lg:h-[720px] w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={art} alt="Art" className="lg:h-[720px] w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={art} alt="Art" className="lg:h-[720px] w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={art} alt="Art" className="lg:h-[720px] w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
