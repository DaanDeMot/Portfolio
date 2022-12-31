import App from "components/App/App";
import React, { useState } from "react";
import { ToDoInput } from "./ToDoInput/ToDoInput";
import ToDoList from "./ToDoList/ToDoList";

export interface TodoItem {
  name: string;
  completed: boolean;
}

const ToDoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: completed } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <ToDoInput todos={todos} setTodos={setTodos}></ToDoInput>
      </div>
      <ToDoList callBackFunction={markCompleted} list={todos} />
    </div>
  );
};

export default ToDoApp;
