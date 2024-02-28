import * as S from './styles'
import avatar from '../../../assets/avatar.svg'

export const Profile = () => {
  return (
    <S.Wrapper>
      <S.Name>
        Olá, Marco Antônio! Design, Casa Di Condi
      </S.Name>
      <div>
        <img
          src={avatar}
          alt="Avatar"
        />
      </div>
    </S.Wrapper>
  )
}
