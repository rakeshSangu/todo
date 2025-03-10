import './App.css'

import {useState} from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: 'REACT revise',
      isComplete: false,
    },
  ])

  const [userInput, setUserInput] = useState('')

  const addNewTask = () => {
    if (userInput !== '') {
      setTodoList(prev => [
        ...todoList,
        {
          id: todoList.length + 1,
          task: userInput,
          isComplete: false,
        },
      ])
      setUserInput('')
    }
  }

  const onDeleteTask = id => {
    const updatedList = todoList.filter(each => each.id !== id)
    setTodoList(updatedList)
  }

  const onChangeStatus = id => {
    const updatedList = todoList.map(each => {
      if (each.id === id) {
        return {
          id: each.id,
          task: each.task,
          isComplete: !each.isComplete,
        }
      }
      return each
    })
    setTodoList(updatedList)
  }

  const onChangeInput = event => {
    setUserInput(event.target.value)
  }

  return (
    <div className="background-section">
      <div className="todo-box">
        <h1 className="top-heading">Task Tracker</h1>
        <div className="input-container">
          <input
            value={userInput}
            className="input-ele"
            placeholder="Add a new task"
            type="text"
            onChange={onChangeInput}
          />
          <button onClick={addNewTask} type="button" className="add-btn">
            Add
          </button>
        </div>
        <ul className="todo-container">
          {todoList.map(each => {
            const {id, task, isComplete} = each
            return (
              <li className="list-item" key={each.id}>
                <div className="first-container">
                  <button
                    onClick={() => onChangeStatus(id)}
                    type="button"
                    className="completed"
                  >
                    x
                  </button>
                  <p className={isComplete ? 'done task' : 'task'}>{task}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => onDeleteTask(id)}
                  type="button"
                >
                  delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
