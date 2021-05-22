import styled from 'styled-components'

const Container = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 60ch;
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const CenterLayout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default CenterLayout
