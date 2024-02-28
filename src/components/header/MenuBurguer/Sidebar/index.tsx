import * as S from './styles'
import { BsHouse, BsTelephone } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5"
import { RiInboxFill, RiSignalTowerFill } from "react-icons/ri";
import { TiLightbulb } from "react-icons/ti";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { HiOutlineVolumeUp } from "react-icons/hi"
import { FaBars } from 'react-icons/fa'
import { RiArrowDownSFill  } from "react-icons/ri";

export const Sidebar = ({ active } : any) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <S.Container sidebar={active}>
      <S.CloseTab onClick={closeSidebar}>
        <FaBars size={40}/>
        todos
        <S.ArrowDown>
          <RiArrowDownSFill size={20}/>
        </S.ArrowDown>
      </S.CloseTab>
      <S.Content>
        <S.Navegations>
          <S.List>
            <BsHouse 
              color='white' 
              size={40}
            />
            <a href="/">Página principal</a>
          </S.List>
          <S.List>
            <IoNewspaperOutline 
              color='white' 
              size={40}
            />
            <a href="/">Notícias</a>
          </S.List>
          <S.List>
            <RiInboxFill 
              color='white' 
              size={40}
            />
            <a href="/">Caixa de entrada</a>
          </S.List>
          <S.List>
            <TiLightbulb 
              color='white' 
              size={40}
            />
            <a href="/">Oportunidades internas</a>
          </S.List>
          <S.List>
            <RiSignalTowerFill 
              color='white' 
              size={40}
            />
            <a href="/">Conti Cast</a>
          </S.List>
          <S.List>
            <BsTelephone 
              color='white' 
              size={40}
            />
            <a href="/">Telefone/Ramais</a>
          </S.List>
          <S.List>
            <LiaBirthdayCakeSolid 
              color='white' 
              size={40}
            />
            <a href="/">Aniversariantes do Mês</a>
          </S.List>
          <S.List>
            <HiOutlineVolumeUp 
              color='white' 
              size={40}
            />
            <a href="/">
              Fale Conosco
            </a>
            <S.ArrowDown>
              <RiArrowDownSFill 
                size={20} 
                color='white'
              />
            </S.ArrowDown>
          </S.List>
        </S.Navegations>
      </S.Content>
    </S.Container>
  )
}