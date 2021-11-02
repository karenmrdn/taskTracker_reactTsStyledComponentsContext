import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import styled from "styled-components";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    new Todo("Learn React"),
    new Todo("Learn React Native"),
    new Todo("Learn JS"),
  ]);

  const handleAddTodo = (text: string) => {
    setTodos((prev) => [new Todo(text), ...prev]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id: string) => {
    // setTodos((prev) =>
    //   prev.map((todo) => {
    //     if (todo.id === id) {
    //       todo.checked = !todo.checked;
    //     }
    //     return todo;
    //   })
    // );
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    updatedTodos.sort((a, b) => +a.checked - +b.checked);
    setTodos(updatedTodos);
  };

  return (
    <Wrapper>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodoStatus={toggleTodoStatus}
      />
    </Wrapper>
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
