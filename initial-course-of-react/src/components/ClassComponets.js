import React from 'react'

export default class ClassComponents extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>First Class Component</h2>
                <p>APP: {this.props.canal}</p>
                <p>Course: {this.props.course}</p>
            </div>
            
        )
    }
}

