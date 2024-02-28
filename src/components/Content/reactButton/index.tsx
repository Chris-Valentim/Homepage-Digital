import { useState } from 'react'
import * as S from './styles'

import { AiOutlineLike } from "react-icons/ai"
import { BiSolidLike, BiDislike, BiSolidDislike } from "react-icons/bi"

export const ReactButton = () => {
  const [isLike, setIsLike] = useState<boolean>(false)
  const [isDislike, setIsDislike] = useState<boolean>(false)

  const handleLike = () => {
    setIsLike(!isLike)
    setIsDislike(false)
  }

  const handleDislike = () => {
    setIsDislike(!isDislike)
    setIsLike(true)
  }

  return (
    <S.Wrapper>
        <S.ButtonLike onClick={handleLike}>
         {
          isLike ? <AiOutlineLike color='#4C51D9' size={30}/> : <BiSolidLike color='#4C51D9' size={30} />
        } 
        </S.ButtonLike>
        <S.ButtonDeslike onClick={handleDislike}>
        {
          isDislike ? <BiSolidDislike color='#4C51D9' size={30} />  : <BiDislike color='#4C51D9' size={30} />
        }
        </S.ButtonDeslike>
    </S.Wrapper>
  )
}
