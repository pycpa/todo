import { useState } from "react";
import { TodoReducerAction } from "../reducers/todoReducer";
import styles from "./TodoInput.module.css";

interface TodoInputProps {
  dispatch: React.Dispatch<TodoReducerAction>;
}

const TodoInput = ({ dispatch }: TodoInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault();
    setText("");
    dispatch({
      type: "add",
      todo: { id: Date.now() + "", text, isCompleted: false },
    });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        onChange={(event) => setText(event.target.value)}
        value={text}
        className={styles.todoInput}
        type="text"
        name="todo"
        id="todo"
        placeholder="Addo Todo"
      />
      <button className={styles.Addbutton}>Add</button>
    </form>
  );
};

export default TodoInput;
