import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  id: string;
  text: string;
  checked: boolean;
  onRemoveTodo: (id: string) => void;
  onToggleTodoStatus: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <ListItem>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onToggleTodoStatus(props.id)}
      />
      <span>{props.text}</span>
      <button>Delete</button>
    </ListItem>
  );
};

const ListItem = styled.li`
  list-style-type: none;
  margin: 4px 0;
`;

export default TodoItem;
