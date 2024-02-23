import styled from "styled-components"
import Magnifier from '../../assets/magnifier.svg'

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
  width: 578px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 0 20px 20px 0;

  outline: none;
  font-size: 18px;
`