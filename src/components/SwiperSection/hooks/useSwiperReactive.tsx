import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

/**
 * Hook to get the swiper instance in a reactive way.
 * This is useful when you need to get the active index of the swiper on every slide change.
 *
 * @see https://github.com/nolimits4web/swiper/issues/5577#issuecomment-1476587892
 * @returns {Swiper} swiper
 */
export const useSwiperReactive = () => {
  const swiper = useSwiper();

  const [, setSignal] = useState({})
  const forceRerender = () => setSignal({})

  useEffect(() => {
    if (swiper) swiper.on("slideChange", forceRerender);
  }, [swiper])

  return swiper
}