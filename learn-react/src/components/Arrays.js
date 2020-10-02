import React, { Component } from 'react'

const persons=["Hamza", "Saif", "Ali"]

export default class Arrays extends Component {

    render() {

        const person = persons.map(person => <h2>{person}</h2>)

        return (
            <div>
                {person}
            </div>
        )
    }
}
