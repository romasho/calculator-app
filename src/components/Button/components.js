import styled from 'styled-components'

export const CustomButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary} 0% 0%
    no-repeat padding-box;
  border: 1px solid
    ${({ theme }) => theme.colors.secondaryText};
  border-radius: ${({ theme }) => theme.fontSizes[1]}px;
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainText};
`
