import * as S from './styles'
import rectangle from '../../assets/rectangle.svg'

const Navegation = () => {
  return (
    <S.Wrapper>
        <S.HeaderBottom>
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
        </S.HeaderBottom>
          <S.Hashtag>
            <S.StyledHashtag>#</S.StyledHashtag>SOMOS <S.StyledHashtag>TODOS</S.StyledHashtag> CDC
          </S.Hashtag>
      </S.Wrapper>
  )
}

export default Navegation
