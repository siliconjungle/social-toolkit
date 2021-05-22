import styled from 'styled-components'
import theme from '../../config/theme'

const Container = styled.div`
  width: 100%;
  ${({ spacing }) => {
    return (
      spacing && `
        & > * {
          margin-bottom: ${spacing};
          &:last-child {
            margin-bottom: ${theme.spacing.none};
          }
        }
      `
    )
  }}
`

const StackLayout = ({ children, spacing }) => {
  return (
    <Container spacing={spacing}>
      {children}
    </Container>
  )
}

export default StackLayout
