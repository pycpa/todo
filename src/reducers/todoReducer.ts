import { Filter, Todo, TodosState } from "../todoApp/TodoApp";

export type TodoReducerAction =
  | { type: "add"; todo: Todo }
  | { type: "delete" | "complete"; id: string }
  | { type: "filter"; filter: Filter };

const todoReducer = (
  { todos, filter }: TodosState,
  action: TodoReducerAction
) => {
  switch (action.type) {
    case "add":
      return { todos: [...todos, action.todo], filter };
    case "delete":
      return { todos: todos.filter((todo) => todo.id !== action.id), filter };
    case "complete":
      return {
        todos: todos.map((todo) => {
          return todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        }),
        filter,
      };
    case "filter":
      return { todos, filter: action.filter };
    default:
      throw new Error("Action type not allowed!");
  }
};

export default todoReducer;
