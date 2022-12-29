// import React, { useState } from 'react'

const TodoFooter = ({ isDone, createdAt, updatedAt, changeIsDone }) => {

  // const [isDone, setIsDone] = useState()

  return (
    <div className='todolist-item__footer'>
      <button className='todolist-item__status'
        onClick={() => changeIsDone(!isDone)}
        type="button"
      >
        {isDone ? 'DONE' : 'TODO'}
      </button>
      <div className='date-drea'>
        <div className='todolist-item__date'>{createdAt}</div>
        <div className='todolist-item__date'>{updatedAt}</div>
      </div>
    </div>
  )
}

export default TodoFooter