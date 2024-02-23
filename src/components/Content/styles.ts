import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 42px;
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
