import React, { Component } from 'react'
import axios from 'axios'

export default class Session extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             LoggedIn: 'false'
        }

        this.Login = this.Login.bind(this)
    }
    

    componentDidMount(){

       
        if(localStorage.getItem("username")!=null){
            this.props.history.push(`/home`)
        }

        
    }

    Login(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            var data = response.data
            var username = data[0].username
            localStorage.setItem('username', username);
            this.props.history.push(`/home`)
        })

        // this.state.LoggedIn =  'true'
        // console.log(this.state.LoggedIn)
        
       
    }

    render() {
        return (
            <div>
                <center><h2>Login Page</h2></center>
                <button onClick={this.Login}>Set Login</button>
            </div>
        )
    }
}
