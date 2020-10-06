import React, { Component } from 'react'
import {UserConsumer} from './userContext'

export default class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {username => {
                    return <div>Hy {username} </div>
                }}
            </UserConsumer>
        )
    }
}
