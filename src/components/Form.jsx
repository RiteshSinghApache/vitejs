import { useState } from "react"

export default function Form() {
    //Handling Input Fields In React
    const [name, setName] = useState("");
    // function handleChange(e) {
    //     setName(e.target.value);
    //     console.log(e.target.value)
    // }
    // function handleChange() {
    //     console.log("change occored")
    // }
    return (
        <div>
            <form>
                <input
                    onChange={(e) => setName(e.target.value)}
                    //onChange={(e) => handleChange(e)}
                    // onChange={function demo(e) {
                    //     return handleChange(e);
                    // }}
                    //onChange={handleChange}
                    type="text" name="name"
                    value={name}>
                </input>
           </form>
        </div>
    )
}