import React,{useState}from 'react'

export const LocalStorage = () => {

    const[name,setName]=useState()

    const Save=(key,value)=>{
        localStorage.setItem(key,value)
    }

    const Get=(key)=>{
        alert(localStorage.getItem(key))
    }

    const Delete=(key)=>{
        localStorage.removeItem(key)
    }



    return (
        <div>
            <label>Type one Name:</label><br/>
            <input  type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
            <button onClick={()=>Save('name', name)}>Save</button>
            <button onClick={()=>Get('name')}>Get</button>
            <button onClick={()=>Delete('name')}>Delete</button>
        </div>
    )
}

