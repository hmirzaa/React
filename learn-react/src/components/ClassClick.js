import React, { Component } from 'react'

export default class ClassClick extends Component {

    EventHandler()
    {
        console.log("Clicked")
    }

    render() {
        return (
            <div>
                <center>
                    <button onClick={this.EventHandler}>Click Class</button>
                </center>
            </div>
        )
    }
}
