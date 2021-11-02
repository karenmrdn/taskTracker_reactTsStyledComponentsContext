import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { TodosContext } from "../store/todosContext";

const Todos: React.FC = (props) => {
  const todosContext = useContext(TodosContext);

  if (todosContext.todos.length === 0) {
    return (
      <h3 style={{ textAlign: "center", color: "#6e0199" }}>
        You have no tasks yet
      </h3>
    );
  }

  return (
    <UnorderedList>
      {todosContext.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
          onRemoveTodo={todosContext.handleRemoveTodo}
          onToggleTodoStatus={todosContext.toggleTodoStatus}
        />
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  padding: 0;
`;

export default Todos;
