import { useState } from "react";

export default function Counter() {
    // State in react
    //mention two parameters 1st state variable and 
    //second is state function to call state
    const [count, setCount] = useState(0);
    //useState is a hook to use dynamic change in components
    function handleClick() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Count value is:{count}</h1>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>


            {/* Creating Multiple States In React */}
        </div>
    );
}