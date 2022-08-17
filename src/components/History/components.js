import styled from 'styled-components'

export const CustomDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  width: calc(25% - 60px);
  height: calc(100% - 2rem);
  border-left: 2px solid
    ${({ theme }) => theme.colors.secondaryText};
  margin: 1rem 0;
  display: ${props => (props.visible ? 'block' : 'none')};
`

export const DivWithCustomScroll = styled.div`
  max-height: calc(100% - 60px);
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1rem;
  };
  &::-webkit-scrollbar-track {
    box-Shadow: inset 0 0 0;
  };
  &::-webkit-scrollbar-thumb {
    background-Color: ${({ theme }) =>
      theme.colors.secondaryText};
    border-Radius: 2rem;
  },
`

export const Heading = styled.h2`
  height: 37px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: normal;
`

export const HistoryExpression = styled.p`
  padding: 25px 0 15px 50px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.mainText};
`
