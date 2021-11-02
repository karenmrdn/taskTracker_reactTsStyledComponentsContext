import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import styled from "styled-components";
import TodosContextProvider from "./store/todosContext";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <Wrapper>
        <NewTodo />
        <Todos />
      </Wrapper>
    </TodosContextProvider>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #6e0199;
  border-radius: 12px;
`;

export default App;
