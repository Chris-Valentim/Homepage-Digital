import styled from "styled-components";
import Line from '../assets/line.svg'

export const Wrapper = styled.div`
  margin-top: 42px;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30px;
`

export const Title = styled.h1`
  font-size: 51px;
  font-weight: 300;
  
  margin-bottom: 30px;
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

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  
  margin-left: -100px;
  gap: 34px;
`

export const Subtitle = styled.h1`
  color: var(--color-title-body);
  font-size: 60px;
  font-weight: 300;
`

export const Date = styled.p`
  /* margin-left: -550px; */
  font-size: 14px;
`

export const Division = styled.div`
  border: 1px solid var(--input-text-darkgray);
  margin-left: 29px;
  margin-right: 29px;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const Photo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`

export const DescriptionPhoto = styled.p`
  color: #627D98;

  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 785px;
  gap: 12px;
`

export const ReactButton = styled.div`
  display: flex;
  justify-content: right;
`

export const ButtonLike = styled.button`
  padding: 5px;
  border-radius: 10px 0 0 10px;
  border-right: none;
  border-left: 1px solid #4C51D9;
  border-top: 1px solid #4C51D9;
  border-bottom: 1px solid #4C51D9;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonDeslike = styled.button`
  padding: 5px;
  transform: scale(-1);

  border-radius: 10px 0 0 10px;
  border-top: 1px solid #4C51D9;
  border-right: 1px solid #4C51D9;
  border-bottom: 1px solid #4C51D9;
  border-left: 1px solid #4C51D9;

  &:hover {
    cursor: pointer;
  }
`

export const Comments = styled.div`
  display: flex;
  align-items: center;

  gap: 7px;
`

export const Input = styled.input`
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  
  width: 600px;
  outline: 0;
  font-size: 16px;
`