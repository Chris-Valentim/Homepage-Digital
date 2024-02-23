import styled from "styled-components"
import Line from '../../assets/line.svg'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30px;
  margin-bottom: 30px;
`

export const Title = styled.h1`
  font-size: 51px;
  font-weight: 300;
`

export const LineLeft = styled.div`
  background-image: url(${Line});
  background-repeat: no-repeat;

  width: 265px;
  height: 5px;
`

export const LineRight = styled.div`
  background-image: url(${Line});
  background-repeat: no-repeat;

  width: 265px;
  height: 5px;

  transform: scaleX(-1);
`
