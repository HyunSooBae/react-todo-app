// import dotenv from "dotenv";
import {
  useEffect,
  useState
} from "react";
// dotenv.config();
// require('dotenv').config();
function TodoList() {

  const [loading, setLoading] = useState(true)
  const [todos, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'apikey': process.env.REACT_APP_API_KEY,
            'username': 'KDT3_BaeHyunSoo'
          }
        })
        const todoList = await res.json()
        console.log(todoList)
        setTodo(todoList)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    // setTodo('0')
  }, [])

  return (
    <div>
      {/* {console.log(todos)} */}
      {loading ? <strong>Loading...</strong> : null}
      <div>TodoList</div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      {/* {todos} */}
    </div>
  )
}

export default TodoList