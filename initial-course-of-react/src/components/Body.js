import React, {useState} from 'react'
import './Body.css'

export const Body = () => {

    const [num,setNum]=useState(10)

    return (
        <div>
            <h2>React Course</h2>
            <p className='text'>Training React useState</p>
            <h1>State Number: {num}</h1>
            <button onClick={()=>setNum(num+10)}> + 10 </button>

        </div>
    )
}
