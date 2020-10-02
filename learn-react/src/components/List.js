import React, { Component } from 'react'
import Person from './Person'

// const persons=[
//     {
//         id:1,
//         name:'Hamza'
//     },
//     {
//         id:2,
//         name:'Ali'
//     },
//     {
//         id:3,
//         name:'Saif'
//     }
// ]

const persons=["Hamza", "Saif", "Ali"]

export default class List extends Component {

   
    render() {

        // const person = persons.map(person => <Person key={person.id} person={person} /> )
        const person = persons.map((name, index) => <h2 key={index}>{name}</h2> )


        return (
            <div>
                {person}
            </div>
        )
    }
}
