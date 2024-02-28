import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Controls } from './components/Controls'
import './styles'

interface SwiperSectionProps {
  children: React.ReactNode
  titleComponent: React.ReactNode
}


export const SwiperSection = ({children, titleComponent}: SwiperSectionProps) => {
  return (
  <div>
    <h3>{titleComponent}</h3>
    <Swiper 
      slidesPerView={3} 
      modules={[Pagination]}
    >
      {children}
      <Controls />
    </Swiper>
  </div>
  )
}
