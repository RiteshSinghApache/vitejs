import styles from "./styles/todofooter.module.css"
export default function TodoFooter({ completedTodos, totalTodos }) {
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed todos: {completedTodos}</span>
            <span className={styles.item}>Total todos: {totalTodos}</span>
        </div>
    )
}