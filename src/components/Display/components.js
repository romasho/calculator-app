import styled from 'styled-components'

export const CustomInput = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: normal;
  outline: none;
  max-width: calc(75% - 2rem);
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.secondaryText};
  padding: ${({ theme }) => theme.fontSizes[1]}px;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 120px;
  color: ${({ theme }) => theme.colors.mainText};
`
