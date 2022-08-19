import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: calc(100vh - 120px);

  max-width: 1920px;

  padding: ${({ theme }) => theme.spaces[0]}px;
  margin: 0 auto;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.mainBg};

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[0]}px;
`
