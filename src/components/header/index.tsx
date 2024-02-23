import * as S from './styles'
import cdcDigital from '../assets/cdcDigital.svg'
import avatar from '../assets/avatar.svg'
import rectangle from '../assets/rectangle.svg'

const Header = () => {
  return (
    <div>
      <S.HeaderTop>
        <img
          src={cdcDigital}
          alt="logo da empresa"
        />
        <S.Search>
          <S.ImageSearch />
          <S.Input 
            type="text" 
            placeholder='buscar...'
          />
        </S.Search>
        <S.Profile>
          <S.Name>
            Olá, Marco Antônio! Design, Casa Di Condi
          </S.Name>
          <img
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
              <S.List href="/">
                todos
              </S.List>
            <S.ArrowBottomIcon />
          </S.MenuHamburger>
            <S.List href="/">
              Página principal
            </S.List>
            <S.List href="/">
              Notícias
            </S.List>
            <S.List href="/">
              Caixa de entrada
            </S.List>
            <S.List href="/">
              Oportunidades internas
            </S.List>
            <S.List href="/">
              Conti Cast
            </S.List>
            <S.List href="/">
              Telefone/Ramais
            </S.List>
            <S.List href="/">
              Aniversariantes do Mês
            </S.List>
          <S.Contact>
              <S.List href="/">
                Fale conosco
              </S.List>
            <S.ArrowBottomIcon />
          </S.Contact>
        </S.Navegation>
          <S.Hashtag>
            <S.StyledHashtag>#</S.StyledHashtag>SOMOS <S.StyledHashtag>TODOS</S.StyledHashtag> CDC
          </S.Hashtag>
      </S.HeaderBottom>
    </div>
  )
}

export default Header
