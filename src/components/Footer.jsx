import styles from "./Footer.module.css";
export default function Footer({ completedItems, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todo:{completedItems}</span>
      <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>
  );
}
