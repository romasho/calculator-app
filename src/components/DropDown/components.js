import styled from 'styled-components'

export const Ul = styled.ul`
  list-style-type: none;
  position: absolute;
  border: 2px solid #707070;
  background: #ffffff;
  width: 401px;
  top: 110px;
  left: 0;
`

export const Li = styled.li`
  width: 397px;
  height: 62px;
  border-bottom: 2px solid #707070;
  font-size: 32px;
  padding: 15px 30px;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
`
