import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Tools/TodoForm'
import TodoList from './components/Tools/TodoList'
import TodosActions from './components/Tools/TodosAction'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      isCompleted: false,
      text,
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompleteTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true))
  }

  const counterTodos = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>&#129464;&#8205;&#9794;&#65039;ToDo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompleteTodos={deleteCompleteTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {counterTodos > 0 && (
        <h4>{`You have completed ${counterTodos} ${
          counterTodos > 1 ? 'todos' : 'todo'
        }`}</h4>
      )}
    </div>
  )
}

export default App
