import { useState } from "react"
import './style.scss'

const initialState = {
  id: 0,
  note: "",
  status: ""
}
const errorText = 'Enter task to add it in a list '
const Todos = () => {
  const [todoValue, setTodoValue] = useState(initialState)
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setTodoValue((todoValue) => ({
      ...todoValue, id: Date.now(),
      note: event.target.value,
      status: 'todo'
    }))
  }
  const addTodo = (event) => {
    event.preventDefault();
    if (todoValue.note !== "") {
      setTodos((todos) => [...todos, todoValue])
      setTodoValue(initialState)
      console.log(event.target)
      setError(false)
    } else {
      setError(true)
    }
  }
  const handleStatus = (event, id) => {
    let updatedData = {
      id: Date.now(),
      status: event.target.value
    }
    setTodos((todos) => {
      return todos.map((todo) => {
        return (todo.id === id ? { ...todo, ...updatedData } : todo)
      })
    })
  }

  const displayDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      // year: 'numeric',
      //month: 'numeric',
      //day: 'numeric'
      // timeZoneName: 'short'
    };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  }

  const deleteTask = (event, id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const setRowStyle = (status) => {
    switch(status){
      case "todo":
        return "todo-bg"
      case "inprogress":
        return "progress-bg"
      case "done":
        return "done-bg" 
      default: 
      return ""
    }
  }
  return (
    <div className="todos">
      <div className="todos-header">
        TODO APP
      </div>
      <div className="todos-body">
        <div className="form-container">
          <form onSubmit={addTodo}>
            <div>
              <input
                type="text"
                name="todo"
                placeholder="Type task..."
                id="todo"
                value={todoValue.note}
                onChange={handleChange} />
            </div>
            <button>Add</button>
            {error && <p className="error">{errorText}</p>}
          </form>
        </div>
        <div className="todos-list">
          <table className={todos.length === 0 ? "no-data" : ""}>
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {todos.length > 0 ? todos.map((todo) => {
                return (
                  <tr key={todo.id} className={setRowStyle(todo.status)}>
                    <td>{displayDate(todo.id)}</td>
                    <td>{todo.note}</td>
                    <td>
                      <select value={todo.status} onChange={(event) => handleStatus(event, todo.id)}>
                        <option value={'todo'}>Todo</option>
                        <option value={'inprogress'}>In-Progress</option>
                        <option value={'done'}>Done</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={(event) => deleteTask(event, todo.id)}>Delete</button>
                    </td>
                  </tr>
                )
              }) : <tr><td colSpan={4} className="text-center">No data</td></tr>}
            </tbody>

          </table>
        </div>
      </div>


    </div>
  )
}
export default Todos