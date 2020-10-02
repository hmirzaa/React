import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log("Child Called")
        return (
            <div>
                <p>This is Child Component {this.props.name}</p>
            </div>
        )
    }
}
