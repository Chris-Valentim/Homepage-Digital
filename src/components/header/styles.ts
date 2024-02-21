import styled from "styled-components";
import vector from '../assets/vector.svg'
import Magnifier from '../assets/magnifier.svg'

export const HeaderTop = styled.div`
  background-color: var(--header-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageSearch = styled.div`
  background-image: url(${Magnifier});
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 20px 0 0 20px;
  width: 60px;
  height: 62px;
`

export const Input = styled.input`
  width: 587px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 0 20px 20px 0;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 30px;
`

export const Name = styled.p`
  width: 180px;
  text-align: right;
  color: #fff;
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
  
  gap: 30px;
  margin-top: 17px;
  margin-bottom: 17px;
`

export const VectorIcon = styled.div`
  background-image: url(${vector});
  background-repeat: no-repeat;
  height: 5px;
  width: 8px;
`

export const MenuHamburger = styled.button`
 display: flex;
 justify-content: center;
 align-items: end;

 background-color: var(--nav-background);
 border: none;
 font-size: 14px;
 gap: 5px;

 &:hover {
  cursor: pointer;
 }
`

export const List = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: var(--color-text-header);
  text-decoration: none;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Contact = styled.button`
  display: flex;
  justify-content: center;
  align-items: end;

  background-color: var(--nav-background);
  border: none;
  gap: 5px;
`

export const Hashtag = styled.p`
  margin-right: 45px;
  color: #fff;
`

export const StyledHashtag = styled.span`
  color: #00E6FE;
`