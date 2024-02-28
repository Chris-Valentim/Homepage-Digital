import styled from "styled-components";

export const HeaderTop = styled.div`
  background-color: var(--header-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  @media(max-width: 968px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }  
`
