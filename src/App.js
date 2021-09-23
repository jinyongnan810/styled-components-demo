import { Fragment } from "react/cjs/react.production.min";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { Container } from "./components/styles/container.styled";
import { GlobalStyle } from "./components/styles/global.style";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Header />
        <Container>
          <h1>hello </h1>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
