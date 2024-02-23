import * as S from './styles'
import ArrowLeft from '../assets/arrowLeft.svg'
import ArrowRight from '../assets/arrowRight.svg'

const ContentBottom = () => {
  return (
    <S.Wrapper>
      <S.Line />
      <S.GuideRelated>
      </S.GuideRelated>
      <S.Pages>
        <S.ArrowLeft>
          <img
            src={ArrowLeft}
            alt="Retroceder a página"
          />
        </S.ArrowLeft>
        <S.Guide />
        <S.ArrowRight>
          <img
            src={ArrowRight}
            alt="Avançar a página"
          />
        </S.ArrowRight>
      </S.Pages>
    </S.Wrapper>
  )
}

export default ContentBottom
