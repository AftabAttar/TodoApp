import TodoItems from "./TodoItems";
import styles from "./TodoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.listItems}>
      {sortTodos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
}
