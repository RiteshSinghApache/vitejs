import ConditionalComponent from './components/ConditionalComponent'
import Counter from './components/Counter'
import Form from './components/Form'
import Fruits from './components/Fruits'
import Hello from './components/Hello'
import Message from './components/Message'
import MultipleForm from './components/MultipleForm'
import Todo from './components/Todo'
import TodoHeader from './components/TodoHeader'


function App() {
  const persons = {
    name: "Ritesh",
    message: "Hi there",
    setNumbers: [1, 3, 4]
  }

  return (
    <div className="App">
      {/* <Hello persons={persons} /> */}
      {/* <Fruits /> */}
      {/* <ConditionalComponent /> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <MultipleForm /> */}
      <TodoHeader />
      <Todo />
    </div>
  )


  // return (
  //   <div className="App">
  //     <Hello name="Ritesh" message="Hi there" />
  //   </div>
  // )
}

export default App
