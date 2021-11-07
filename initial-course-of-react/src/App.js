import React from 'react'
import Logo from './components/img/Capturar2.JPG'

const App = () => {
  const title=()=>{
    return('Const and Variables')
  }

  const channel = 'CFB'
  const course = 'React'

  return (
    <div>
      <header>
      <h1>{title()}</h1>
      </header>
      <p>Title: {channel}</p>
      <p>{'Course: '+ course}</p>
      <img alt='' src={Logo}/>
      <br/>
      <img alt='' src='/Capturar3.JPG'></img>
    </div>
  )
}

export default App
