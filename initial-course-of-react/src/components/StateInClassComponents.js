import React from 'react'

export default class StateInClassComponents extends React.Component{

    constructor(props){
        super(props)
        this.model="BMW"
        this.state={
            on:false,
            Km:0,
        }
    }

    onOff(){
       // this.setState({on:!this.state.on})
       this.setState(
           (state)=>({
                on:!state.on
            })
       )
       
    }

    run(){
        this.setState((state,props)=>({
            km:state.km + props.fator
        }),
            
        )
    }

    render(){
        return(
            <div>
                <h2>State In Class Component</h2>
                <p>Model: {this.model}</p>
                <p>On: {this.state.on ? 'Sim': 'Não'}</p>
                <p>Km: {this.state.Km}</p>

                <button onClick={()=>this.onOff()}>
                    {this.state.on? 'Off': 'ON'}
                </button>

                <button onClick={()=>this.run()}>Run</button>
            </div>
            
        )
    }
}