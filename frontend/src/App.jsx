import { useEffect, useState } from 'react'
import Web from './web'
import Preload from './component/preload'
import './App.css'
import Sorry from "./component/sorry"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={load?<Preload/>:<Web/>}/>
      <Route path='/Construction' element={<Sorry/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}
export default App
