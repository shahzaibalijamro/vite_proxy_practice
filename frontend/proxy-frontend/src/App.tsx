import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [obj,myObj] = useState<object | null>(null)
  useEffect(()=>{
    axios("/me")
    .then(res=>{
      myObj(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  
  return (
    <>
    <h1>
      {obj && obj.login}
    </h1>
    </>
  )
}

export default App
