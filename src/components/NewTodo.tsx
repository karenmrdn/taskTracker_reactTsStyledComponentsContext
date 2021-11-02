import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { TodosContext } from "../store/todosContext";

const NewTodo: React.FC = (props) => {
  const todosContext = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();

    todosContext.handleAddTodo(todoTextRef.current!.value);
    todoTextRef.current!.value = "";
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <span style={{ fontSize: 26, fontWeight: "bold", color: "#6e0199" }}>
        Todo text
      </span>
      <FormControl>
        <input type="text" ref={todoTextRef} />
        <button type="submit">+</button>
      </FormControl>
    </Form>
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

  & button:focus {
    background-color: #9015c0;
    outline: none;
  }

  & input:focus {
    background-color: #e0d6e4;
  }
`;

const Form = styled.form`
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
`;

export default NewTodo;
