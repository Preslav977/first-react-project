import { v4 as uuid } from 'uuid'

const todos = [
  {task: 'mow the yard', id: uuid()},
  {task: 'work on Odin Projects', id: uuid()},
  {task: 'feed the cat', id: uuid()},
]


function TodoList() {
  return(
    <ul>
      {todos.map((todo) => {
      return <li key={todo.id}>{todo.task}</li>
      })}
    </ul>
  )
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function MonthList() {
  return (
    <ul>
      {months.map((month, index) => (<li key={index}>{month}</li>) )}
    </ul>
  )
}

export {MonthList}

