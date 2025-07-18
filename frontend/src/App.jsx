import { useEffect, useState } from 'react'
import Web from './web'
import Preload from './component/preload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [load,setLoad] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoad(false)
      
    }, (1000));
    

  },[])

  return (
    <>
    {load?<Preload/>:<Web/>}
    </>
  )
}
export default App
