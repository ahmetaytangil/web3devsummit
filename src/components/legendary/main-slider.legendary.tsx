import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

const MainSliderLegendary = () => {
  return (
      <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
              768: {
                  slidesPerView: 5,
                  spaceBetween: 60
              },

          }}
          className="main-slider-legendary"
      >
          <SwiperSlide>
              <Image src="/images/bitcoin-logo.svg" alt="" width={240} height={60} />
          </SwiperSlide>
          <SwiperSlide>
              <Image src="/images/etherium-logo.png" alt="" width={240} height={60} />
          </SwiperSlide>
          <SwiperSlide>
              <Image src="/images/solana-logo.svg" alt="" width={240} height={60} />
          </SwiperSlide>
          <SwiperSlide>
              <Image src="/images/cardano.png" alt="" width={240} height={60} />
          </SwiperSlide>
          <SwiperSlide>
              <Image src="/images/ripple-logo.svg" alt="" width={240} height={60} />
          </SwiperSlide>
      </Swiper>
  )
}

export default MainSliderLegendary