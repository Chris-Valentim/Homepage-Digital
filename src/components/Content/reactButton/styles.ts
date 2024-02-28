import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-left: 10px;
  margin-right: 10px;
`

export const ButtonLike = styled.button`
  padding: 5px;

  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;

  border-radius: 0 10px 10px 0;
  border-top: 1px solid #4C51D9;
  border-right: 1px solid #4C51D9;
  border-bottom: 1px solid #4C51D9;
  border-left: 1px solid #4C51D9;

  &:hover {
    cursor: pointer;
  }
`
