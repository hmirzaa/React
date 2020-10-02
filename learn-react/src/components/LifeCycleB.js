import React, { Component } from 'react'

export default class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fullname:'',
            
        }
        console.log('LifeCycle B Constructor')
 
    }

    
    handleFullName = event => {
        this.setState({fullname:event.target.value})
    }

    componentDidMount()
    {
        console.log('LifeCycle B Did Mount')
    }

    static getDerivedStateFromProps()
    {
        console.log('LifeCycle B Derived')
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
        console.log('LifeCycle B render')
        return (
            <div>
                <h1> LifeCycle B</h1>
                <label>Name:</label>
                    <input type="text" placeholder="Full Name Here" 
                    value={this.state.fullname} onChange={this.handleFullName}  required="required"/>
            </div>
        )
    }
}
