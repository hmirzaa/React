import React, { Component } from 'react'
import Child from './ChildComponent'

export default class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parent: "Parent"
        }

        this.greetHandler=this.greetHandler.bind(this)
    }

    greetHandler(childName)
    {
        alert(`Hy ${this.state.parent} from ${childName}`)
    }
    

    render() {
        return (
            <div>
                <Child greet={this.greetHandler} />
                <Child greet={this.greetHandler} />
            </div>
        )
    }
}
