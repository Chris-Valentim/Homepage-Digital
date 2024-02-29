import styled from "styled-components";

interface SidebarProps {
  $sidebar: boolean
}

export const Container = styled.div<SidebarProps>`
  background-color: var(--nav-background);
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.$sidebar ? '0' : '-100%')};
  animation: showSidebar .4s;
  z-index: 1000;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const CloseTab = styled.p`
  display: flex;
  align-items: center;
  padding-top: 20px;
  width: 110px;
  color: #fff;
  gap: 5px;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ArrowDown = styled.div`
  display: flex;
  padding-top: 8px;

  &:hover {
    cursor: pointer;
  }
`

export const Content = styled.div`
  margin-top: 50px;
`;

export const Navegations = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
`
