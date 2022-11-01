import styles from "./TodoItem.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { Todo } from "../todoApp/TodoApp";
import { TodoReducerAction } from "../reducers/todoReducer";

interface TodoItemProps {
  todo: Todo;
  dispatch: React.Dispatch<TodoReducerAction>;
}

const TodoItem = ({
  todo: { id, text, isCompleted },
  dispatch,
}: TodoItemProps) => {
  const handleComplete = (id: string) => {
    dispatch({ type: "complete", id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "delete", id });
  };

  return (
    <article className={styles.container}>
      <div>
        <input
          onClick={() => handleComplete(id)}
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={isCompleted}
        />
        <label onClick={() => handleComplete(id)} htmlFor={id}>
          {text}
        </label>
      </div>
      <FaTrashAlt onClick={() => handleDelete(id)} color="white" />
    </article>
  );
};

export default TodoItem;
