import React from 'react'

const TodoHeader = ({ order }) => {
  return (
    <div className='todolist-item__header'>
      <div className='todolist-item__order'>{order}</div>
      <span>
        <button className='edit-btn'>edit</button>
        <button className='delete-btn'>delete</button>
      </span>
    </div>
  )
}

export default TodoHeader