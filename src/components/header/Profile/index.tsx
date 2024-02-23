import * as S from './styles'
import avatar from '../../assets/avatar.svg'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Name>
        Olá, Marco Antônio! Design, Casa Di Condi
      </S.Name>
      <img
        src={avatar}
        alt="Avatar"
      />
    </S.Wrapper>
  )
}

export default Profile
