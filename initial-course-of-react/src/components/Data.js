import React from 'react'

export const Data = (props) => {
    return (
        <section>
            <p>Youtube: {props.youtube}</p>
            <p>Name: {props.name}</p>
            <p>Day: {props.day}</p>
        </section>
    )
}
