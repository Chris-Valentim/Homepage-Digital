import * as S from './styles'
import cdcDigital from '../assets/cdcDigital.svg'
import avatar from '../assets/avatar.svg'
import rectangle from '../assets/rectangle.svg'
import Magnifier from '../assets/magnifier.svg'

const Header = () => {
  return (
    <div>
      <S.HeaderTop>
        <img
          src={cdcDigital}
          alt="logo da empresa"
        />
        <div>
          <S.IconButton>
            <img 
              src={Magnifier} 
              alt="Lupa de Pesquisa" 
            />
          </S.IconButton>
          <S.Search 
            type="text" 
            placeholder='buscar...'
          />
        </div>
        <S.Profile>
          <S.Name>
            Olá, Marco Antônio! Design, Casa Di Condi
          </S.Name>
          <S.Avatar
            src={avatar}
            alt="Avatar"
          />
        </S.Profile>
      </S.HeaderTop>
      <S.HeaderBottom>
        <S.Navegation>
          <S.MenuHamburger>
            <img
              src={rectangle}
              alt="Ícone do Menu"
            />
            <S.List>
              <a href="/">todos</a>
            </S.List>
            <S.VectorIcon />
          </S.MenuHamburger>
          <S.List>
            <a href="/">Página principal</a>
          </S.List>
          <S.List>
            <a href="/">Notícias</a>
          </S.List>
          <S.List>
            <a href="/">Caixa de entrada</a>
          </S.List>
          <S.List>
            <a href="/">Oportunidades internas</a>
          </S.List>
          <S.List>
            <a href="/">Conti Cast</a>
          </S.List>
          <S.List>
            <a href="/">Telefone/Ramais</a>
          </S.List>
          <S.List>
            <a href="/">Aniversariantes do Mês</a>
          </S.List>
          <S.Contact>
            <S.List>
              <a href="/">Fale conosco</a>
            </S.List>
            <S.VectorIcon />
          </S.Contact>
        </S.Navegation>
          <p>#SOMOS TODOS CDC</p>
      </S.HeaderBottom>
    </div>
  )
}

export default Header
