import styled from 'styled-components'
import ballonRelacionados from '../assets/ballonRelacionados.svg'

export const GuideTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`

export const Ballon = styled.div`
  background-image: url(${ballonRelacionados});
  background-position: center;
  background-repeat: no-repeat;
  width: 55px;
  height: 26px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: var(--color-title-body);
`