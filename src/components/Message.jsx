export default function Message() {
    //Event Handling In React
    function handleClick() {
        console.log("button click");
    }
    return (
        <div>
            <button onClick={handleClick}> Click here to get a message</button>
        </div>
    );
}