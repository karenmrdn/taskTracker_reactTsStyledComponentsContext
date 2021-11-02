import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styled from "styled-components";

interface TodosProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodoStatus: (id: string) => void;
}

const Todos: React.FC<TodosProps> = (props) => {
  if (props.todos.length === 0) {
    return <h4 style={{ textAlign: "center" }}>You have no tasks yet</h4>;
  }

  return (
    <UnorderedList>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
          onRemoveTodo={props.onRemoveTodo}
          onToggleTodoStatus={props.onToggleTodoStatus}
        />
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  padding: 0;
`;

export default Todos;
