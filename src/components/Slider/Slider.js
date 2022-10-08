import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Image } from "react-bootstrap";
import "swiper/css";

import "./styles.css";

export const Slider = () => {
  const media = "http://localhost:8002/v1/telegram/media";

  const slide = (img, txt) => {
    return (
      <SwiperSlide>
        <Card>
          <Card.Header>
            header
          </Card.Header>
        <Image
            className="w-80"
            src={img}
            roundedCircle={true}
            thumbnail={true}
        />
          <Card.Footer>
            {txt}
          </Card.Footer>
        </Card>
      </SwiperSlide>
    )
  };

  return (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          className="mySwiper"
        >
          {slide(`${media}/photo_2022-09-08_08-03-15_7145625093855382528.jpg`, `eah they won't release the product to me, probably because it fails some surveillance checks, which annoys me greatly. You can use your real identity to buy it though. They just really want to know who you are, they seem to care more about that than selling product `)}
          {slide(`${media}/photo_2022-08-17_16-54-04_7145625149136533504.jpg`)}
          {slide(`https://api.p2pmarket.net/v1/telegram/@bitcoinp2pmarketplace?msg_id=1758&thumb=1`)}
          {slide(`${media}/photo_2022-07-06_12-05-05_7143767263615310848.jpg`)}
        </Swiper>
  );
}
