import styled from "styled-components"
import CheckIcon from '../../assets/check.svg'

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 29px;

  @media(max-width: 748px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

export const Image = styled.div`
  @media(max-width: 425px) {
    height: auto;
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: var(--color-title-body);

  margin-top: 19px;

  @media(max-width: 425px) {
    margin-top: 10px;
  }

  @media(min-width: 1024px) {
    width: 100%;
    max-width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 10px;

  @media(max-width: 425px) {
    width: 100%;
  }
`

export const Description = styled.p`
  min-width: 200px;
  width: 100%;
  max-width: 300px;
  text-align: left;
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
  gap: 2px;

  &:hover{
    cursor: pointer;
  }
`

export const Date = styled.div`
  display: flex;
  justify-content: right;
  
  font-size: 12px;
  font-weight: 400;

  @media(max-width: 425px) {
    display: flex;
    width: 300px;
  }
`

export const Check = styled.img.attrs({
  src: CheckIcon,
  alt: 'visualizado'
})`
  transform: translateX(-160%) translateY(60%);
  position: absolute;
`
