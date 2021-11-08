import React, {useState} from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Data } from './components/Data'
import LedVerde from './components/img/verde.jpg'
import LedVermelho from './components/img/vermelho.JPG'
import './App.css'
const App = () => {
  const name = () =>{
    return('Ramos')
  }

  const youtube = 'youtube.com'

  const [btOn,setButtonOn]=useState(false)
  return (
    <div className='center'>
      <Header/>
      <Body/>
      <Data youtube={youtube} name={name()} day='2'/>

      <img alt='' style={{width:'50px'}} src={btOn?LedVerde:LedVermelho}></img>
      <button onClick={()=>setButtonOn(!btOn)}>{btOn?'OFF':'ON'}</button>
    </div>
  )
}

export default App
