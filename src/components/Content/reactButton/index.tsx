import * as S from './styles'
import Emoji from '../../assets/emoji.svg'

const ReactButton = () => {
  return (
    <S.Wrapper>
      <S.ButtonLike>
        <img
          src={Emoji}
          alt="Botão de gostei"
        />
      </S.ButtonLike>
      <S.ButtonDeslike>
        <img
          src={Emoji}
          alt="Botão de não gostei"
        />
      </S.ButtonDeslike>
    </S.Wrapper>
  )
}

export default ReactButton 
