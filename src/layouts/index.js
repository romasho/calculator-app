import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: calc(100vh - 120px);

  max-width: 1920px;

  padding: ${({ theme }) => theme.spaces[0]}px;
  margin: 0 auto;
`
