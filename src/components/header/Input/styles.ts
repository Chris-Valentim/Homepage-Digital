import styled from "styled-components"
import Magnifier from '../../../assets/magnifier.svg'

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

  border-right: 1px solid white;
  border-radius: 20px 0 0 20px;
  width: 60px;
  height: 60px;

  @media(max-width: 1176px) {
    max-width: 380px;
    height: 50px;
  }

  @media(max-width: 500px) {
    max-width: 280px;
    height: 45px;
  }
`

export const Input = styled.input`
  width: 578px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 0 20px 20px 0;

  outline: none;
  font-size: 18px;

  @media(max-width: 1176px) {
    max-width: 380px;
    height: 50px;
  }

  @media(max-width: 500px) {
    max-width: 280px;
    height: 45px;
  }
`