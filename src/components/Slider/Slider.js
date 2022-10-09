import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import OfferCard from "../OfferCard/OfferCard";

export const Slider = (props) => {
  const slide = (card) => {
    return (
      <SwiperSlide>
        <OfferCard card={card}/>
      </SwiperSlide>
    )
  };

  return (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          direction="horizontal"
        >
          {slide(0)}
          {slide(1)}
          {slide(2)}
          {slide(3)}
        </Swiper>
  );
}
