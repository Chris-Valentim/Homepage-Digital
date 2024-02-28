import styled from "styled-components"
import CheckIcon from '../../assets/check.svg'

export const Card = styled.div`
  display: flex;
  margin-top: 29px;

  width: 700px;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: var(--color-title-body);

  margin-top: 29px;
  margin-bottom: 31px;
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  margin-left: 10px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`

export const Link = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-title-body);
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: 115px;
  gap: 6px;

  &:hover{
    cursor: pointer;
  }
`

export const Date = styled.p`
  display: flex;
  margin-left: 250px;
  
  font-size: 12px;
  font-weight: 400;
`

export const Check = styled.img.attrs({
  src: CheckIcon,
  alt: 'visualizado'
})`
  transform: translateX(-160%) translateY(60%);
  position: absolute;
`
