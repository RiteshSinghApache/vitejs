
function Hello({ persons }) {
    return <h1>{persons.message} {persons.name} {persons.setNumbers}</h1>
}

//Destructuring props
// function Hello({ name, message }) {
//     return <h1>{message} {name}</h1>
// }

// Structuring props
// function Hello(props) {
//     return <h1>{props.persons.message} {props.persons.name} {props.persons.setNumbers}</h1>
// }
// function Hello(props) {
//     const { name, message } = props;
//     return <h1>{message} {name}</h1>
// }

// function Hello(props) {
//     return <h1>{props.message} {props.name}</h1>
// }

export default Hello;