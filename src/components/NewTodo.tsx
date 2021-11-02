import React, { useRef } from "react";
import styled from "styled-components";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();

    props.onAddTodo(todoTextRef.current!.value);
    todoTextRef.current!.value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <span style={{ fontSize: 26, fontWeight: "bold", color: "#6e0199" }}>
        Todo text
      </span>
      <FormControl>
        <input type="text" ref={todoTextRef} />
        <button type="submit">+</button>
      </FormControl>
    </form>
  );
};

const FormControl = styled.div`
  display: flex;
  align-items: center;

  & input {
    outline: none;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 8px;
    flex-grow: 1;
    margin-right: 0.25rem;
    border: 1px solid #6e0199;
  }

  & button {
    outline: none;
    font-size: 24px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #6e0199;
    background-color: #6e0199;
    color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  & button:hover {
    background-color: #9015c0;
  }

  & input:focus {
    background-color: #e0d6e4;
  }
`;

export default NewTodo;
