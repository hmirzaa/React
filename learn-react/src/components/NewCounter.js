import React, { Component } from 'react'

export default class NewCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

    }

    increment()
    {
        /*
        this.setState
        (
            {
                count: this.state.count+1
            },
            () => {
                console.log(this.state.count)
            }
        )

         console.log(this.state.count)
        */

        this.setState(prevState => ({
            count: prevState.count +1
        }))
        
    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    

    render() {
        return (
            <div>
                <center>
                    <div>
                        Count - {this.state.count}
                        <br></br>
                        <button onClick={() => this.incrementFive()}>Increment</button>
                    </div>
                </center>
                
            </div>
        )
    }
}
