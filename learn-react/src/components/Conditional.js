import React, { Component } from 'react'

export default class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false,
            message:''
        }
    }
    

    render() {

        // condition ? true_statement : else_statement

        return this.state.isLoggedIn ?
        (
            <div>
                <h2>
                    Hy Saif
                </h2>
            </div>
        ) :
        (
            <div>
                <h2>
                    Hy Guest
                </h2>
            </div>
        )

        // if(this.state.isLoggedIn)
        // {
        //     this.state.message="Hy Saif"
        // }else{
        //     this.state.message="Hy Guest"
        // }

        // return (
        //     <div>
        //         {this.state.message}
        //     </div>
        // )
        
    }
}
