// import {
//   useEffect,
//   // useState
// } from "react";
// // import dotenv from "dotenv";
// // dotenv.config();
// require('dotenv').config();

// // 할일 목록 조회
// function useFecth(url) {
//   // const [data, setData] = useState([])

//   useEffect(async () => {
//     const json = await (await fetch(url, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//         'username': 'KDT3_BaeHyunSoo',
//         'apikey': REACT_APP_API_KEY
//       }
//     })).json()
//     console.log(json)
//     return json
//   }, [])
// }

// export default useFecth