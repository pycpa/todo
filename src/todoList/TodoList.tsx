import { TodoReducerAction } from "../reducers/todoReducer";
import { Todo } from "../todoApp/TodoApp";
import TodoItem from "../todoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoReducerAction>;
}

const TodoList = ({ todos, dispatch }: TodoListProps) => {
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
