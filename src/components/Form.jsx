import styles from "./Form.module.css";
import { BiSolidAddToQueue } from "react-icons/bi";

import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handelSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); //31 no video
    setTodo({ name: "", done: false });
  }
  return (
    <>
      <form className={styles.inputForm} onSubmit={handelSubmit}>
        <div className={styles.formContainer}>
          <input
            className={styles.inputBox}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter items....."
          />
          <button className={styles.subButton} type="submit">
            <BiSolidAddToQueue />
          </button>
        </div>
      </form>
    </>
  );
}
