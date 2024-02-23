import styled from "styled-components";
import arrowBottom from '../../assets/arrowBottom.svg'

export const Wrapper = styled.div`
  background-color: var(--nav-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderBottom = styled.nav`
  display: flex;
  align-items: center;
  
  gap: 30px;
  margin-top: 17px;
  margin-bottom: 17px;
  margin-left: 29px;
`

export const ArrowBottomIcon = styled.div`
  background-image: url(${arrowBottom});
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