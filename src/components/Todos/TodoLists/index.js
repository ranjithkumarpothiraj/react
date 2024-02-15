const TodoLists = (props) => {
    const {filteredList,displayDate,deleteTask, handleStatus, onClick} = props
  return (
    <>
          {filteredList.length > 0 ? filteredList.map((todo) => {
            return (
              <div className="col-md-3 mb-5" title="View Details" id={todo.id} key={todo.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-5">{todo.title}</h5>
                    {/* <p className="card-text">{todo.note}</p> */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <select className="form-select form-select-sm w-auto" value={todo.status} onChange={(event) => handleStatus(event, todo.id)}>
                      <option value={'todo'}>Todo</option>
                      <option value={'inprogress'}>In-Progress</option>
                      <option value={'done'}>Done</option>
                    </select>
                    <p className='btn btn-sm btn-bg mb-0' onClick={()=>onClick(todo)}> <i className="bi bi-eye-fill"></i> View details</p> 
                    </div>
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