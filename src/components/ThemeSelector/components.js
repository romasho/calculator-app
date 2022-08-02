import styled from 'styled-components'

export const Button = styled.button`
  width: 401px;
  height: 93px;
  border: 2px solid #434343;
  border-radius: 8px;
  font-size: 32px;
  text-align: start;
  padding: 28px;
  margin-top: 32px;
  background: ${props =>
    props.light ? '#FFFFFF ' : '#F2F2F2'};
  cursor: pointer;
`

export const Triangle = styled.div`
  border: 17px solid transparent;
  border-top: 25px solid #f2f2f2;
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: 65px;
  right: 25px;
  pointer-events: none;
`
