import React from 'react'

const TodoText = ({ title }) => {

  function handleTitle() {

  }

  return (
    <textarea className='todolist-item__title'
      placeholder='할일을 작성하세요'
      value={title}
      onChange={handleTitle}
    ></textarea>
  )
}

export default TodoText