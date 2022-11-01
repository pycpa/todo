import { useState } from "react";
import styles from "./TodoHeader.module.css";
import { FaSun } from "react-icons/fa";
import { TodoReducerAction } from "../reducers/todoReducer";
import { Filter, FILTERS } from "../todoApp/TodoApp";

interface TodoHeaderProps {
  filter: Filter;
  dispatch: React.Dispatch<TodoReducerAction>;
}

const TodoHeader = ({ filter: currentFilter, dispatch }: TodoHeaderProps) => {
  return (
    <header className={styles.container}>
      <FaSun color="white" />
      <nav>
        <ul className={styles.navItems}>
          {FILTERS.map((filter) => (
            <li
              key={filter}
              onClick={() => dispatch({ type: "filter", filter })}
              className={`${styles.navItem} ${
                filter === currentFilter && styles.navItemSelected
              }`}
            >
              {filter}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TodoHeader;
