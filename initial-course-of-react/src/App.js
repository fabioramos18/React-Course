import React from 'react'
import { ListMAP } from './components/ListMAP'
import { FormElements } from './components/FormElements'
import { HookUseEffect } from './components/HookUseEffect'
import './App.css'
import { useEffect } from 'react/cjs/react.development'

const App = () => {
  
  return (
    <div className="center">
      <h1>React Course</h1>
      <ListMAP/>
      <FormElements/>
      <HookUseEffect/>
    </div>
  )
}

export default App
