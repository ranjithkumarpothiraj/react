const Form = (props) => {
    const {showCreateForm, error, todoValue, handleChange, errorText, handleClose, addTodo} = props
  return (
    showCreateForm &&
        <div className="create-form">
          <div className="header d-flex justify-content-end mb-5">
            <button onClick={handleClose} className="btn fs-1 text-danger border-none close"><i className="bi bi-x-square-fill"></i></button>
          </div>
          <div className="form-container">
            <form onSubmit={addTodo}>
              <div className="form-floating mb-3">
                <input type="text"
                  name="title"
                  placeholder="Title"
                  id="title"
                  value={todoValue.title}
                  onChange={handleChange}
                  className={`form-control ${error && todoValue.title === '' ? "is-invalid" : ""}`} />
                <label htmlFor="title">Title</label>
              </div>

              <div className="form-floating mb-3">
                <textarea type="text"
                  name="note"
                  placeholder="Description"
                  style={{ height: "100px" }}
                  id="description"
                  value={todoValue.note}
                  onChange={handleChange}
                  className={`form-control ${error && todoValue.note === '' ? "is-invalid" : ""}`} />
                <label htmlFor="description">Description</label>
              </div>
              <button className="d-flex justify-content-center btn w-auto mx-auto btn-md btn-primary">Add Task</button>
              {error && <p className="error">{errorText}</p>}
            </form>
          </div>
        </div>
  )
}
export default Form