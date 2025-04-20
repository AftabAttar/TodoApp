//32 no video
import { RiDeleteBin5Fill } from "react-icons/ri";

import styles from "./TodoItems.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handelDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handelClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const line = item.done ? styles.completed : "";
  return (
    <div className={styles.listItems}>
      <div className={styles.items}>
        <span className={line} onClick={() => handelClick(item.name)}>
          {item.name}
        </span>
      </div>
      <span className={styles.button}>
        <button
          onClick={() => handelDelete(item)}
          className={styles.deleteButton}
        >
          <RiDeleteBin5Fill />
        </button>
      </span>
    </div>
  );
}
