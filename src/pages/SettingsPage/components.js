import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.mainBg};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[5]}px;
`

export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  letter-spacing: 0;
  font-weight: normal;
`
