// import dotenv from "dotenv";
import { useState } from "react";
// dotenv.config();
// require('dotenv').config();
function TodoList() {

  const [todo, setTodo] = useState([])

  async function getTodos() {
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'apikey': process.env.REACT_APP_API_KEY,
        'username': 'KDT3_BaeHyunSoo'
      }
    })
    const todos = await res.json()
    console.log(process.env.REACT_APP_API_KEY)
    // setTodo(todos)
    return todos
  }

  console.log(getTodos())

  return (
    <div>
      TodoList......
      <div>{console.log(todo)}</div>
    </div>
  )
}

export default TodoList