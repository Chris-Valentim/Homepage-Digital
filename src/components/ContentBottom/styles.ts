import styled from "styled-components";
import ball from '../assets/ball.svg'

export const Wrapper = styled.div`
  width: 100vw;
  margin-top: 39px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 27px;
`

export const GuideRelated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Line = styled.div`
  border: 1px solid var(--input-text-darkgray);
  margin-top: 30px;
`

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin-top: 27px;
`

export const Guide = styled.div`
  background-image: url(${ball});
  background-repeat: no-repeat;
  background-position: center;
  width: 45px;
  height: 10px;
`

export const ArrowLeft = styled.button`
  background-color: #fff;
  border: none;

  &:hover{
    cursor: pointer;
  }
`

export const ArrowRight = styled.button`
  background-color: #fff;
  border: none;

  &:hover{
    cursor: pointer;
  }
`
