import React from 'react'

export const ListMAP = () => {

    const cars=['Mercedes','BMW','Golf','Citroen','Range Rover','Focus']

    const jsonCars=[
        {category:'sports', price:'1.000.000', model:'Gof GTI'},
        {category:'sports', price:'2.000.000', model:'Camaro'},
        {category:'SUV', price:'1.500.000', model:'HRV'},
        {category:'SUV', price:'2.500.000', model:'T-Cross'},
    ]

    const listCars=cars.map((c)=>
        <li>{c}</li>
    )

    const listJSONCars=jsonCars.map((c)=>
        <li>{c.category} - {c.model} -{c.price}$ </li>
    )
    return (
        <div>
            <h1>List Map</h1>
            <ul>{listCars}</ul>
            <br/>
            <ul>{listJSONCars}</ul>
        </div>
    )
}
