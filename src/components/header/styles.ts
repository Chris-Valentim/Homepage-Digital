import styled from "styled-components";

export const HeaderTop = styled.div`
  background-color: var(--header-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
 
  @media(max-width: 968px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }  
`

export const HeaderTopMobile = styled.div`
  width: 100%;

   @media(max-width: 968px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }  
`

export const Logotipo = styled.div`
  width: 100%;
  height: 100%;
`
