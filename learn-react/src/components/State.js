import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super();
        this.state = {
           message: 'Hy Hamza'

            
        }
      
      }

      changeMessage()
      {
          this.setState({
              message: 'Thank You'
          })
      }
      


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change Text</button>
            </div>
        )
    }
}
