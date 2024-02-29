import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Controls } from './components/Controls'
import './styles.css'
import "swiper/css";
import "swiper/css/pagination";

interface SwiperSectionProps {
  children: React.ReactNode
  titleComponent: React.ReactNode
}


export const SwiperSection = ({ children, titleComponent }: SwiperSectionProps) => {
  return (
    <div>
      <div className="line" />
        <div className="title">{titleComponent}</div>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          748: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 20
          }
        }}
        modules={[Pagination]}
      >
        <div>
          {children}
        </div>
        <Controls />
      </Swiper>
    </div>
  )
}
