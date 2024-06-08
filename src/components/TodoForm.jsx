import { useState } from "react"
import styles from "./styles/form.module.css"
export default function TodoForm({todos, setTodos}) {
    //const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({ name: "", done: false });
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }
    return (
        <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
                <input type="test"
                    onChange={(e) => setTodo({ name: e.target.value, done: false })}
                    value={todo.name}
                    className={styles.moderninput}
                    placeholder="Enter todo text....."
                />
                <button type="submit" className={styles.modernButton}>Add</button>
            </div>
        </form>
    );
}