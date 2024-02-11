{/* <div className="todos-header">
        TODO APP
      </div> */}
      {/* <div className="todos-body">
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
        <div className="todo-options">
          <select name="statusFilter" id="statusFilter" value={statusFilterVal} onChange={handleStatusFilter}>
            <option value={'all'}>All</option>
            <option value={'todo'}>Todo</option>
            <option value={'inprogress'}>In Progress</option>
            <option value={'done'}>Done</option>
          </select>
        </div>
        <div className="todos-list">
          <table className={todos.length === 0 ? "no-data" : ""}>
            <thead>
              <tr>
                <th>#</th>
                <th className='note-text'>Task</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredList.length > 0 ? filteredList.map((todo) => {
                return (
                  <tr key={todo.id} className={setRowStyle(todo.status)}>
                    <td>{displayDate(todo.id)}</td>
                    <td className='note-text'>{todo.note}</td>
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
      </div> */}