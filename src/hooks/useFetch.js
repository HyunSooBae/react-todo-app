import {
  useEffect,
  useState
} from "react";
// import dotenv from "dotenv";
// dotenv.config();
// require('dotenv').config();

// 할일 목록 조회
function useFecth(url) {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'apikey': process.env.REACT_APP_API_KEY,
            'username': 'KDT3_BaeHyunSoo'
          }
        })
        const todos = await res.json()
        // console.log(todos)
        setTodo(todos)
        // setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    // setTodo('0')
  }, [url])

  return todos
}

export default useFecth