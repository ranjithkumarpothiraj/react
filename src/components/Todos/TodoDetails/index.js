import { memo } from 'react'
import './style.scss'
const TodoDetails = (props) => {
    let { todoDetail,handleCloseDetail,handleStatus } = props
    return (
        // w-lg-50 w-md-50 w-sm-100
        <div className="todoDetails" id='todoDetails'>
            <div className="todoDetails-header d-flex justify-content-end mb-5">
                <button onClick={()=>{handleCloseDetail(todoDetail.id)}} className="btn fs-1 text-danger border-none close"><i className="bi bi-x-square-fill"></i></button>
            </div>
            <div className="todoDetails-body">
            {todoDetail && <>
                <h3 className="mb-5">{todoDetail.title}</h3>
                
                <select className="form-select form-select-sm mb-5 w-auto" value={todoDetail.status} onChange={(event) => handleStatus(event, todoDetail.id)}>
                      <option value={'todo'}>Todo</option>
                      <option value={'inprogress'}>In-Progress</option>
                      <option value={'done'}>Done</option>
                </select>
                <p className='todo-description-title'>Description</p>
                <p className='todo-description'>{todoDetail.note}</p>
            </>}
            </div>
        </div>
    )
}


export default memo(TodoDetails);