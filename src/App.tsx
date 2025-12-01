import './index.css'
import Todo from './todo'
import { TodoContext } from './todocontext'

function App() {

  const context = "I trying to making the context"

  return (
    <TodoContext value={context}>
      <Todo />
    </TodoContext>
  )
}

export default App
