import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class ClickCounter extends Component {
   
    render() {
        
        const { counter, incrementCount, name } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{name} Clicked {counter} Times</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter)