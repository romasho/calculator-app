import styled from 'styled-components'

export const Triangle = styled.div`
  border: 17px solid transparent;
  border-top: 25px solid ${({ theme }) => theme.colors.grey};
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: 65px;
  right: 25px;
  pointer-events: none;
`
