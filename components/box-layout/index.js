// Should be an article element
// Customisable: backgroundColor, border, shadow, padding, children
// Optimisations: shadow to be image based for increased rendering speeds for large amounts of cards.
import styled from 'styled-components'
import theme from '../../config/theme'

const Container = styled.article`
  width: 100%;
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  border-radius: ${theme.borderRadius.br3};
  overflow: hidden;
  ${({ hasPadding }) => hasPadding && `padding: ${theme.spacing.m};`}
  ${({ hasShadow }) => hasShadow && `box-shadow: ${theme.shadow.s1};`}
  ${({ hasBorder }) => hasBorder && `
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.color.black};
  `}
`

// @media (max-width: 37.5em) {
//   border-radius: ${theme.borderRadius.br1};
// }

const BoxLayout = ({ children, hasPadding, hasShadow, hasBorder, backgroundColor }) => {
  return (
    <Container hasPadding={hasPadding} hasShadow={hasShadow} hasBorder={hasBorder} backgroundColor={backgroundColor}>
      {children}
    </Container>
  )
}

export default BoxLayout
