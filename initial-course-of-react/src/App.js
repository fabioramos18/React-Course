import React from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Data } from './components/Data'

const App = () => {
  const name = () =>{
    return('Ramos')
  }

  const youtube = 'youtube.com'
  return (
    <>
      <Header/>
      <Body/>
      <Data youtube={youtube} name={name()} day='2'/>
    </>
  )
}

export default App
