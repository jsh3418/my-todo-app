import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "./constants/constant";

const Todos = styled.ul`
  width: 360px;
  height: 537px;

  padding: 0px;
  margin: 0px;
`;

function App() {
  const [todos, setTodos] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <Todos>{todos ? todos.map((todo) => <Todo key={todo.id} todo={todo} fetchData={fetchData}></Todo>) : ""}</Todos>
      </div>
      <Input fetchData={fetchData} />
    </div>
  );
}

export default App;
