import React from 'react'
import { ListMAP } from './components/ListMAP'
import { FormElements } from './components/FormElements'
import { HookUseEffect } from './components/HookUseEffect'
import './App.css'
import { LocalStorage } from './components/LocalStorage'
const App = () => {
  
  return (
    <div className="center">
      <h1>React Course</h1>
      <ListMAP/>
      <FormElements/>
      <HookUseEffect/>
      <LocalStorage/>
    </div>
  )
}

export default App
