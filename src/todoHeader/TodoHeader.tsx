import { useState } from "react";
import styles from "./TodoHeader.module.css";
import { FaSun } from "react-icons/fa";

const TodoHeader = () => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    <header className={styles.container}>
      <FaSun color="white" />
      <nav>
        <ul className={styles.navItems}>
          <li
            onClick={() => setFilter("all")}
            className={`${styles.navItem} ${
              filter === "all" && styles.navItemSelected
            }`}
          >
            All
          </li>
          <li
            onClick={() => setFilter("active")}
            className={`${styles.navItem} ${
              filter === "active" && styles.navItemSelected
            }`}
          >
            Active
          </li>
          <li
            onClick={() => setFilter("completed")}
            className={`${styles.navItem} ${
              filter === "completed" && styles.navItemSelected
            }`}
          >
            completed
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TodoHeader;
