// Should be an article element
// Customisable: backgroundColor, border, shadow, padding, children
// Optimisations: shadow to be image based for increased rendering speeds for large amounts of cards.
import styled from 'styled-components'
import theme from '../../config/theme'

const Container = styled.article`
  width: 100%;
  background-color: ${theme.color.white};
  border-radius: ${theme.borderRadius.br3};
  ${({ hasPadding }) => hasPadding && `padding: ${theme.spacing.m};` }
  ${({ hasShadow }) => hasShadow && `box-shadow: ${theme.shadow.shadow1};`}
`

const Card = ({ children, hasPadding, hasShadow }) => {
  return (
    <Container hasPadding={hasPadding} hasShadow={hasShadow}>
      {children}
    </Container>
  )
}

export default Card
