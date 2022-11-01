import { useReducer, useState } from "react";
import todoReducer from "../reducers/todoReducer";

import TodoHeader from "../todoHeader/TodoHeader";
import TodoInput from "../todoInput/TodoInput";
import TodoList from "../todoList/TodoList";
import styles from "./TodoApp.module.css";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

const initialTodos: Todo[] = [
  { id: "1", text: "시험용1", isCompleted: false },
  { id: "2", text: "시험용2", isCompleted: true },
  { id: "3", text: "시험용3", isCompleted: false },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <div>
      <div className={styles.container}>
        <TodoHeader />
        <TodoList todos={todos} dispatch={dispatch} />
        <TodoInput dispatch={dispatch} />
      </div>
    </div>
  );
};

export default TodoApp;
