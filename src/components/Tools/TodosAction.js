import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodosActions({ resetTodos, deleteCompleteTodos }) {
  return (
    <div>
      <Button>
        <RiDeleteBin2Line
          title="Clear completed todos"
          onClick={deleteCompleteTodos}
        />
      </Button>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
    </div>
  )
}
export default TodosActions
