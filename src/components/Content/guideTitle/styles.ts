import styled from "styled-components"
import Line from '../../../assets/line.svg'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30px;
  margin-bottom: 30px;
  margin-left: 29px;
  margin-right: 29px;
`

export const Title = styled.h1`
  font-size: 51px;
  font-weight: 300;

  @media(max-width: 840px) {
    font-size: 30px;
  }
`

export const LineLeft = styled.div`
  background-image: url(${Line});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 270px;
  height: 5px;
`

export const LineRight = styled.div`
  background-image: url(${Line});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 270px;
  height: 5px;

  transform: scaleX(-1);
`
