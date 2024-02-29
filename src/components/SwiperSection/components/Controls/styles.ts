import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  gap: 6px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;

  > svg {
    color: ${({disabled}) => (disabled ? '#9FB3C8' :'#070B8C')};
  }
`