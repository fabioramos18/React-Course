import React from 'react'

export const Data = (props) => {
    
    const text={
        color:'#f0f',
        fontSize:'2em' ,
    }
    return (
        <section>
            <p style={{color:'#f00', fontSize:'2em'}}>Youtube: {props.youtube}</p>
            <p style={text}>Name: {props.name}</p>
            <p>Day:{props.day}</p>
        </section>
    )
}
