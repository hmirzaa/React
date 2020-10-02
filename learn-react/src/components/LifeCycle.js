import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            
        }
    
        console.log('LifeCycle A Constructor')
 
    }

    handleUsername = event =>{
        this.setState({username:event.target.value})
    }

    componentDidMount()
    {
        console.log('LifeCycle A Did Mount')
    }

    static getDerivedStateFromProps()
    {
        console.log('LifeCycle A Derived')
        return null
    }

    shouldComponentUpdate()
    {
        console.log('LifeCycle A Should Upddate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifeCycle A Snapshot')
    }

    componentDidUpdate()
    {
        console.log('LifeCycle A Did Update')
    }
    


    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <h1> LifeCycle A</h1>
                <LifeCycleB />
                <label>Username:</label>
                    <input type="text" placeholder="Username Here" 
                    value={this.state.username} onChange={this.handleUsername} required="required" />
            </div>
        )
    }
}
