import { useReducer } from "react";
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

export const FILTERS = ["all", "active", "completed"] as const;
export type Filter = typeof FILTERS[number];

export type TodosState = {
  todos: Todo[];
  filter: Filter;
};

const initialTodos: TodosState = {
  todos: [
    { id: "1", text: "시험용1", isCompleted: false },
    { id: "2", text: "시험용2", isCompleted: true },
    { id: "3", text: "시험용3", isCompleted: false },
  ],
  filter: "all",
};

const TodoApp = () => {
  const [{ todos, filter }, dispatch] = useReducer(todoReducer, initialTodos);

  const filteredTodos =
    filter === "all"
      ? todos
      : todos.filter((todo) => todo.isCompleted === (filter !== "active"));

  return (
    <div>
      <div className={styles.container}>
        <TodoHeader filter={filter} dispatch={dispatch} />
        <TodoList todos={filteredTodos} dispatch={dispatch} />
        <TodoInput dispatch={dispatch} />
      </div>
    </div>
  );
};

export default TodoApp;
