// import dotenv from "dotenv";
import {
  useEffect,
  useState
} from "react";
import useFecth from "../hooks/useFetch";
import Todo from "./Todo";
import './main.module.scss'
// dotenv.config();
// require('dotenv').config();
function TodoList() {

  const [loading, setLoading] = useState(true)

  const todos = useFecth(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`)

  return (
    <div className="todolist-container">
      {loading ? <strong>Loading...</strong> : null}
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList