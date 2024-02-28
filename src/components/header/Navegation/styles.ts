import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: var(--nav-background);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;

  @media(max-width: 1038px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

export const HeaderBottom = styled.nav`
  display: flex;
  align-items: center;

  gap: 20px;
`

export const ArrowDown = styled.div`
  display: flex;
  padding-top: 10px;
`

export const NavContent = styled.ul`
  display: flex;
  align-items: center;

  gap: 20px;

  @media(max-width: 1038px) {
    display: none;
  }
` 

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--color-text-header);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
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
  color: #fff;

  @media(max-width: 1250px) {
    display: none;
  }

  @media(max-width: 1038px) {
    display: flex;
  }
`

export const StyledHashtag = styled.span`
  color: #00E6FE;
`
