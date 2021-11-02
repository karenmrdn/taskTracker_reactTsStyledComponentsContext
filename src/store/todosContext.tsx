import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  todos: Todo[];
  handleAddTodo: (text: string) => void;
  handleRemoveTodo: (id: string) => void;
  toggleTodoStatus: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  todos: [],
  handleAddTodo: (text: string) => {},
  handleRemoveTodo: (id: string) => {},
  toggleTodoStatus: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
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

  const contextValue: TodosContextObj = {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    toggleTodoStatus,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
