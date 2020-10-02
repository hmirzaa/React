import React, { Component } from 'react'

export default class FormHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            fullname:'',
            class:''
            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleUsername = event =>{
        this.setState({username:event.target.value})
    }

    handleFullName = event => {
        this.setState({fullname:event.target.value})
    }


    handleClass = event => {
        this.setState({class:event.target.value})
    }

    handleSubmit(event)
    {
        event.preventDefault()

        alert(` ${this.state.username} ${this.state.fullname} ${this.state.class}`)
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Username:</label>
                    <input type="text" placeholder="Username Here" 
                    value={this.state.username} onChange={this.handleUsername} required="required" />
                    <br></br>
                    <br></br>
                    <label>Name:</label>
                    <input type="text" placeholder="Full Name Here" 
                    value={this.state.fullname} onChange={this.handleFullName}  required="required"/>
                    <br></br>
                    <br></br>
                    <label>Select Class:</label>
                    <select required="required" onChange={this.handleClass}> 
                    <option value={this.state.class}>Select A Class</option>
                    <option value="FSC">FSC</option>
                    <option value="ICS">ICS</option>
                    <option value="FA">FA</option>
                    </select>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit Values" />
                </form>
            </div>
        )
    }
}
