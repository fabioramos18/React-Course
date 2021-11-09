import React, {useEffect,useState} from 'react'

export const HookUseEffect = () => {

    const[count,setCount]=useState(0)
    useEffect(
        ()=>console.log("Loaded!"),
        document.title='Count'+ count
    )

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}
