
import './App.css'
import Navbar from './Component/Navbar'
import FormData from './Component/FormData'
import { useState } from 'react'


function App() {
  const [mode,setMode]=useState('light')
    const togglebutton=()=>{
       if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor="black"
       }else{
        setMode('light')
        document.body.style.backgroundColor='white'
       }
    }

  return (
    <>
     <Navbar title="NewNavbar"  mode={mode} togglebutton={togglebutton} />
    <div className='container d-flex justify-content-center align-content-center'>
         <FormData title="Enter the text to analyze " mode={mode} />
    </div> 
    </>
  )
}

export default App
