import TodoApp from "../todoApp/TodoApp";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <TodoApp />
    </div>
  );
};

export default App;
