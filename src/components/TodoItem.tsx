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
      <FormControl>
        <Checkbox
          type="checkbox"
          checked={props.checked}
          onChange={() => props.onToggleTodoStatus(props.id)}
        />
        <span>{props.text}</span>
      </FormControl>
      <Button onClick={() => props.onRemoveTodo(props.id)}>Delete</Button>
    </ListItem>
  );
};

const ListItem = styled.li`
  list-style-type: none;
  margin: 4px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin: 16px 0;
  padding: 12px;
`;

const FormControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #6e0199;
  border: 1px solid #6e0199;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #9015c0;
  }

  &:focus {
    background-color: #9015c0;
    outline: none;
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;

  &:focus {
    background-color: #9015c0;
    outline: none;
  }
`;

export default TodoItem;
