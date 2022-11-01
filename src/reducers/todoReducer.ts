import { Todo } from "../todoApp/TodoApp";

export type TodoReducerAction =
  | { type: "add"; todo: Todo }
  | { type: "delete" | "complete"; id: string };

const todoReducer = (todos: Todo[], action: TodoReducerAction) => {
  switch (action.type) {
    case "add": {
      return [...todos, action.todo];
    }
    case "delete": {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case "complete": {
      return todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    }
    default: {
      throw new Error("Action type not allowed!");
    }
  }
};

export default todoReducer;
