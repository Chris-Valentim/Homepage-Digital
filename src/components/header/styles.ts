import styled from "styled-components";
import vector from '../assets/vector.svg'

export const HeaderTop = styled.div`
  background-color: var(--header-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const IconButton = styled.button`

`

export const Search = styled.input`

`

export const Profile = styled.div`

`

export const Name = styled.p`

`

export const Avatar = styled.img`

`

export const HeaderBottom = styled.div`
  background-color: var(--nav-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navegation = styled.nav`
  display: flex;
  align-items: center;
`

export const VectorIcon = styled.div`
  background-image: url(${vector});
  background-repeat: no-repeat;
  height: 5px;
  width: 8px;
`

export const MenuHamburger = styled.div`
 display: flex;
 justify-content: center;
 align-items: end;
`

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`

