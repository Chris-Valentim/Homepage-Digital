import styled from "styled-components";
import Foundation from '../assets/foundation.svg'
import Ball from '../assets/ball.svg'

export const Wrapper = styled.div`
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

export const GuideTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`

export const Latest = styled.div`
  background-image: url(${Foundation});
  background-position: center;
  background-repeat: no-repeat;
  width: 45px;
  height: 30px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: var(--color-title-body);
`

export const Check = styled.img`
  transform: translateX(-160%) translateY(60%);
  position: absolute;
`

export const Card = styled.div`
  display: flex;
  margin-top: 29px;
  margin-right: 30px;

  max-width: 700px;
`

export const InfoCard = styled.div`
  margin-left: 10px;
`

export const TitleCard = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: var(--color-title-body);

  margin-top: 29px;
  margin-bottom: 31px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`

export const SubmitButton = styled.a`
  font-size: 14px;
  font-weight: 500;
`

export const Button = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`

export const Date = styled.p`
  display: flex;
  margin-left: 250px;
  
  font-size: 12px;
  font-weight: 400;
`

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin-top: 27px;
`

export const Guide = styled.div`
  background-image: url(${Ball});
  background-repeat: no-repeat;
  background-position: center;
  width: 45px;
  height: 10px;
`

export const ArrowLeft = styled.button`
  background-color: #fff;
  border: none;
`

export const ArrowRight = styled.button`
  background-color: #fff;
  border: none;
`