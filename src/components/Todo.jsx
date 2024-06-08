import { useState } from "react"
//import "../css/style.css";
import "../TodoApp.css"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo) => todo.done).length;
    const totalTodos = todos.length;
    return (
        <div className="header">
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
            <TodoFooter completedTodos={completedTodos} totalTodos={totalTodos} />
        </div>
    )
}