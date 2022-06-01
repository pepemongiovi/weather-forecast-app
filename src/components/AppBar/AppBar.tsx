import { Container, Title } from './AppBar.styles';

const AppBar = () => {
  return (
    <Container position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <img width="200" height="58" src="https://impro.ai/wp-content/uploads/2020/11/cropped-9-768x217.d110a0.webp" alt="" loading="lazy" sizes="(max-width: 768px) 100vw, 768px" style={{ marginTop: 5 }} />
      <Title variant="h4">
        Weather Forecast
      </Title>
    </Container>
  )
}

export default AppBar