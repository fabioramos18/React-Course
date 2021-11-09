import React from 'react'
import { ListMAP } from './components/ListMAP'
import { FormElements } from './components/FormElements'
import { HookUseEffect } from './components/HookUseEffect'
import './App.css'
import { LocalStorage } from './components/LocalStorage'
import ClassComponents from './components/ClassComponets'
import StateInClassComponents from './components/StateInClassComponents'
const App = () => {
  
  return (
    <div className="center">
      <h1>React Course</h1>
      <ListMAP/>
      <FormElements/>
      <HookUseEffect/>
      <LocalStorage/>
      
      <h1>Class Components</h1>
      <ClassComponents canal="Youtube" course="React"/>
      <StateInClassComponents/>
    </div>
  )
}

export default App
