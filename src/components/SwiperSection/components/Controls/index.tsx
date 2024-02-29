import { useEffect, useState } from "react";
import * as S from './styles'
import { useSwiperReactive } from "../../hooks/useSwiperReactive";
import { Bullet } from "../Bullet";
import { RiArrowLeftSFill, RiArrowRightSFill  } from "react-icons/ri"

export const Controls = () => {
  const swiper = useSwiperReactive();
  const [bullets, setBullets] = useState<number[]>([])

  const handleNext = () => swiper.slideNext();
  const handlePrev = () => swiper.slidePrev();
  const handleBulletClick = (index: number) => swiper.slideTo(index)
 
  const renderBullets = () => 
    bullets.map((bulletNumber) => (
      <Bullet
        key={bulletNumber}
        isActive={swiper.activeIndex === bulletNumber}
        onClick={handleBulletClick}
        page={bulletNumber}
      />
    ))
  
  useEffect(() => {
    if (swiper && swiper.snapGrid) {
      setBullets([...Array(swiper.snapGrid.length).keys()])
    }
  }, [swiper])

  return (
    <S.Container>
      <S.Button 
        disabled={swiper.isBeginning} 
        onClick={handlePrev}
      >
        <RiArrowLeftSFill size={25}/>
      </S.Button>
      {renderBullets()}
      <S.Button
        disabled={swiper.isEnd} 
        onClick={handleNext}
      >
        <RiArrowRightSFill size={25} />
      </S.Button>
    </S.Container>
  )
}
