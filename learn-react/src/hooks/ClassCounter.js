import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }

    clickHandler = () =>
    {
        this.setState(prevState => {
            return { counter: prevState.counter+1 }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >Clicked {this.state.counter} times</button>
            </div>
        )
    }
}
