import * as S from './styles'
import { RiArrowDownSFill  } from "react-icons/ri";
import { MenuBurguer } from '../MenuBurguer'

export const Navegation = () => {
  return (
    <S.Wrapper>
      <S.HeaderBottom>
      <S.List>
        <MenuBurguer />
        <S.ArrowDown>
          <RiArrowDownSFill 
            size={20} 
            color='white' 
          />
        </S.ArrowDown>
      </S.List>
      <S.NavContent>
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
            <S.ArrowDown>
              <RiArrowDownSFill 
                size={20} 
                color='white' 
              />
            </S.ArrowDown>
          </S.List>
        </S.Contact>
      </S.NavContent>
      </S.HeaderBottom>
      <S.Hashtag>
        <S.StyledHashtag>#</S.StyledHashtag>SOMOS<S.StyledHashtag>TODOS</S.StyledHashtag>REACT
      </S.Hashtag>
    </S.Wrapper>
  )
}
