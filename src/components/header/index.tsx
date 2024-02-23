import * as S from './styles'
import cdcDigital from '../assets/cdcDigital.svg'
import Input from './Input'
import Profile from './Profile'
import Navegation from './Navegation'

const Header = () => {
  return (
    <div>
      <S.HeaderTop>
        <img
          src={cdcDigital}
          alt="logo da empresa"
        />
        <Input />
        <Profile />
      </S.HeaderTop>
      <Navegation />
    </div>
  )
}

export default Header
