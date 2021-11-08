import React, {useState} from 'react'

const App = () => {

  const[log,setLog]=useState(false)
  const[color,setColor]=useState(1)

  const msgLogin=()=>{
    return 'Logout'
  }
  const msgLogOff=()=>{
    return 'Please Login'
  }
  const greet=()=>{
    const hour= new Date().getHours()
    if(hour >= 0 && hour<13){
      return <p>Good morning</p>
    }
    else if(hour>13 && hour<18){
      return <p>Good afternoon</p>
    }
    else{
      return <p>Good night</p>
    }
  }

  const red ={color:'#f00'}
  const green ={color:'#0f0'}
  const blue ={color:'#00f'}

  const returnColor=(c)=>{
    if(c===1){
      return red
    }
    else if(c===2){
      return green
    }
    else{
      return blue
    }
  }

  const changeColor=()=>{
    setColor(color+1)
    if(color >2){
      setColor(1)
    }
  }

  return (
    <div className='center'>
      <h1 style={returnColor(color)}>React Course</h1>
      {greet()}
      <button onClick={()=>changeColor()}>Change Color</button>

      <p>{log?msgLogOff():msgLogin()}</p>
      <button onClick={()=>setLog(!log)}>{log?msgLogOff():msgLogin()}</button>
      <br/>

      
    </div>
  )
}

export default App
