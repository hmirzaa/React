import React, { Component } from 'react'

export default class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.EventHandler = this.EventHandler.bind(this)
    }

    EventHandler()
    {
        alert(` ${this.state.message} `)
    }
    



    render() {
        return (
            <div>

                <center>
                    {/* <button onClick={this.EventHandler.bind(this)}>Click Me</button> */}
                    {/* <button onClick={() => this.EventHandler()}>Click Me</button> */}
                    <button onClick={this.EventHandler}>Click Me</button>
                </center>
                
            </div>
        )
    }
}
