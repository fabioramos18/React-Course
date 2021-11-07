import React from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Data } from './components/Data'
import './App.css'
const App = () => {
  const name = () =>{
    return('Ramos')
  }

  const youtube = 'youtube.com'
  return (
    <div className='center'>
      <Header/>
      <Body/>
      <Data youtube={youtube} name={name()} day='2'/>
    </div>
  )
}

export default App
