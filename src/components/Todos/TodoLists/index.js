const TodoLists = (props) => {
    const {filteredList,displayDate,deleteTask, handleStatus} = props
  return (
    <>
          {filteredList.length > 0 ? filteredList.map((todo) => {
            return (
              <div className="col-md-3 mb-5" key={todo.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">{todo.title}</h5>
                    {/* <p className="card-text">{todo.note}</p> */}
                    <select className="form-select form-select-sm mb-3 w-auto" value={todo.status} onChange={(event) => handleStatus(event, todo.id)}>
                      <option value={'todo'}>Todo</option>
                      <option value={'inprogress'}>In-Progress</option>
                      <option value={'done'}>Done</option>
                    </select>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <p className="mb-0">{displayDate(todo.id)}</p>
                    <button className="btn btn-danger btn-sm" onClick={(event) => deleteTask(event, todo.id)}><i className="bi bi-trash"></i></button>
                  </div>
                </div>
              </div>

            )
          }) : <h3 className="mt-5 text-center">No tasks found</h3>}
        </>
  )
}
export default TodoLists