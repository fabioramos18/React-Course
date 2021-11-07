import React from 'react'

const App = () => {
  const title=()=>{
    return('Const and Variables')
  }

  const channel = 'CFB'
  const course = 'React'

  return (
    <div>
      <h1>{title()}</h1>
      <p>Title: {channel}</p>
      <p>{'Course: '+ course}</p>
    </div>
  )
}

export default App
