import React, { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoText from './TodoText'
import TodoFooter from './TodoFooter'

function Todo({ todo }) {
  const { title, order, id, done, createdAt, updatedAt } = todo

  const [isDone, setIsDone] = useState(done)
  console.log(isDone)
  const changeIsDone = (value) => {
    setIsDone(value)
  }


  return (
    <div className='todolist-item'
      data-id={id}
    >
      <TodoHeader order={order} />
      <TodoText title={title} />
      <TodoFooter isDone={isDone} createdAt={createdAt} updatedAt={updatedAt}
        changeIsDone={changeIsDone}
      />

    </div>
  )
}

export default Todo