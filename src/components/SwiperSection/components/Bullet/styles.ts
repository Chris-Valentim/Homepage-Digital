import styled from "styled-components";

export const Indicator = styled.button<{$isActive: boolean}>`
  display: flex;
  align-items: center;
  border: none;
  height: 9px;
  width: 9px;
  background-color: ${(props) => (props.$isActive ? '#000480' : '#9FB3C8')};
  border-radius: 1000px;
`
