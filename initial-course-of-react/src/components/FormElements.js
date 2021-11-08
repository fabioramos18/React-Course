import React, {useState} from 'react'

export const FormElements = () => {

    const[name,setName]=useState('')
    const[car,setCar]=useState('Mercedes')
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    return (
        <div>
            <label>Enter your name</label>
            <input 
                type="text" 
                name="name"
                value={name}
                onChange={(e)=>handleChangeName(e)}
            />
           <p>Name: {name}</p> 

           <label>Select car</label>
           <select value={car} onChange={(e)=>setCar(e.target.value)}>
            <option value='Mercedes'>Mercedes</option>
            <option value='BMW'>BMW</option>
            <option value='Audi'>Audi</option>
            <option value='Range Rover'>Range Rover</option>
           </select>

            <p>Selected Car: {car}</p>
        </div>
    )
}
