import { Fragment } from "react/cjs/react.production.min";
import { Header } from "./components/header";
import { Container } from "./components/styles/container.styled";

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <h1>hello </h1>
      </Container>
    </Fragment>
  );
}

export default App;
