import { useState } from "react"

export default function MultipleForm() {
    //Handling Multiple Inputs In React
    const [name, setName] = useState({firstName: "", lastName: ""});
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name)
    }
    return (
        <div>
            {name.firstName} - {name.lastName}
            <form>
                <input
                // use spread oprater(...name) to make a copy of array into new array
                onChange={(e) => setName({...name, firstName: e.target.value})}
                type="text"
                name="firstName"
                value={name.firstName}
            />
            <input
                onChange={(e) => setName({...name, lastName: e.target.value})}
                type="text"
                name="lastName"
                value={name.lastName}
                />
                <button onClick={(e)=>handleSubmit(e)}>Add form submission</button>
            </form>
        </div>
    )

}

// The spread operator in JavaScript, denoted by three dots(...),
// is a useful tool that allows you to expand iterable objects such as arrays, strings,
// and objects into individual elements.It can also be used to combine multiple iterables into a single one.

// Here are some of the common use cases for the spread operator:
    
// Copy an array: You can use the spread operator to create a shallow copy of an array. 
// This means that the new array will contain the same elements as the original array,
// but any changes made to the new array will not affect the original array.

// Merge arrays: You can use the spread operator to merge multiple arrays into a single array. 
// The new array will contain all of the elements from the original arrays, in the order that they appear.

// Add elements to an array: You can use the spread operator to add new elements to an existing array. 
// The new elements will be added to the end of the array.

// Remove elements from an array: You can use the spread operator to remove elements from an existing array. 
// To do this, you can use the filter() method to filter out the elements that you want to remove.

// Spread an object into its properties: You can use the spread operator to spread an object into its properties. 
// This can be useful for passing object properties to a function or for creating a new object from an existing one.

// Spread a string into its characters: You can use the spread operator to spread a string into its individual characters. 
// This can be useful for converting a string to an array or for iterating over the characters in a string.