import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 30px;

  @media(max-width: 968px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-right: 0;
    margin-top: 20px;
  }
`

export const Name = styled.p`
  width: 180px;
  text-align: right;
  color: #fff;

  @media(max-width: 968px) {
    text-align: center;
    font-size: 14px;
    width: 140px;
  }
`
