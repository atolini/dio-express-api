import Form from "./components/form/Form";
import List from "./components/form/List";
import GlobalStyle from "./GlobalStyle";
import Container from "./App.styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Form />
      <List />
    </Container>
  );
}

export default App;
