import React, { Component, PureComponent } from 'react'
import Child from './Child'
import Pure from './Pure'
import Memo from './Memo'

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }

    componentDidMount()
    {
        setInterval(()=> {
            this.setState({
                name:"Hamza"
            })
        }, 2000)
    }
    

    render() {
        console.log("Parent Called")
        return (
            <div>
                <p>This is Parent Component</p>
                {/* <Child name={this.state.name} />
                <Pure name={this.state.name} /> */}
                <Memo name={this.state.name} />
            </div>
        )
    }
}
