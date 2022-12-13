import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import styled from "styled-components";

const Todos = styled.div`
  width: 360px;
  height: 537px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Todos>
        <Todo />
      </Todos>
      <Input />
    </div>
  );
}

export default App;
