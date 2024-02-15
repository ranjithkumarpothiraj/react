import { useEffect, useState } from "react"
import './style.scss'
import TodoLists from "./TodoLists"
import Form from "./Form"
import TodoDetails from "./TodoDetails"

const initialState = {
  id: 0,
  note: "",
  status: "",
  title: ""
}

const scrollOptions = { behavior: "smooth" }

const errorText = 'Enter task to add it in a list '
const Todos = () => {
  const [todoValue, setTodoValue] = useState(initialState)
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [statusFilterVal, setStatusFilterVal] = useState('all')


  const [showCreateForm, setShowCreateForm] = useState(false);
  const [detailsPanel, setDetailsPanel] = useState(false);
  const [todoDetail, setTodoDetail] = useState({});

  useEffect(() => {
    detailsPanel && document.getElementById('todoDetails').scrollIntoView()
  }, [detailsPanel])

  const handleChange = (event) => {
    setTodoValue((todoValue) => ({
      ...todoValue, id: Date.now(),
      [event.target.name]: event.target.value,
      status: 'todo'
    }))
  }
  const addTodo = (event) => {
    event.preventDefault();
    if (todoValue.note !== "" && todoValue.title !== "") {
      setTodos((todos) => [...todos, todoValue])
      setTodoValue(initialState)
      console.log(event.target)
      setError(false)
      setShowCreateForm(false)
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
        if (todo.id === id) {
          detailsPanel && setTodoDetail({ ...todo, ...updatedData })
          return { ...todo, ...updatedData }
        } else {
          return todo
        }
        // return (todo.id === id ? { ...todo, ...updatedData } : todo)
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

  const handleStatusFilter = (e) => {
    setStatusFilterVal(e.target.value)
  }

  const filteredList = statusFilterVal === 'all' ? todos : todos.filter((todo) => todo.status === statusFilterVal)

  const handleCreate = (e) => {
    e.preventDefault();
    setShowCreateForm(true);
  }

  const handleClose = () => {
    setShowCreateForm(false); setError(false); setTodoValue(initialState)
  }

  const handleDetailsPanel = (data) => {
    setDetailsPanel(true);
    setTodoDetail(data);
  }

  const handleCloseDetail = (id) => {
    setTimeout(() => {
      setDetailsPanel(false);
      setTodoDetail({});
      id && document.getElementById(id).scrollIntoView(scrollOptions);
    }, 300)
  }

  return (
    <div className={`todos ${detailsPanel ? 'overflow-hidden' : ''}`}>
      <div className={`fluid-container ${detailsPanel ? 'blur' : ''}`}>
        <div className="todos-header">
          Task Manager
        </div>

        <div className={`d-flex px-3 justify-content-between`}>

          <div className="todo-options mt-3 mb-3">
            <select className="form-select form-select-md w-auto" name="statusFilter" id="statusFilter" value={statusFilterVal} onChange={handleStatusFilter}>
              <option value={'all'}>All</option>
              <option value={'todo'}>Todo</option>
              <option value={'inprogress'}>In Progress</option>
              <option value={'done'}>Done</option>
            </select>
          </div>

          <button className="my-3 btn btn-primary" onClick={handleCreate}>+ Add task</button>

        </div>

        <div className="row px-3">
          <TodoLists filteredList={filteredList} displayDate={displayDate} deleteTask={deleteTask} handleStatus={handleStatus} onClick={handleDetailsPanel} />
        </div>
      </div>


      <Form addTodo={addTodo} showCreateForm={showCreateForm} error={error} todoValue={todoValue} handleChange={handleChange} errorText={errorText} handleClose={handleClose} />
      {detailsPanel && <TodoDetails todoDetail={todoDetail} handleCloseDetail={handleCloseDetail} handleStatus={handleStatus} />}
    </div>
  )
}
export default Todos