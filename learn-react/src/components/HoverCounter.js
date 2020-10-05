import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class HoverCounter extends Component {
    render() {
        const { counter, incrementCount, name } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>{name} Hovered {counter} Times</h2>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter)