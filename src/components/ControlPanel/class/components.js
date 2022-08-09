import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  min-width: 75%;
  height: calc(100% - 180px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  gap: 10px;
  margin: ${({ theme }) => theme.fontSizes[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
