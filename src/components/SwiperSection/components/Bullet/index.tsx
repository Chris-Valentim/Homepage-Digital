import * as S from './styles'
import { BulletProps } from "./types"

export const Bullet = ({ page, isActive, onClick }: BulletProps) => {
  const handleOnClick = () => onClick(page)

  return (
    <S.Indicator
      key={page}
      onClick={handleOnClick}
      $isActive={isActive}
    >
      
    </S.Indicator>
  )
}
