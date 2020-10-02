import React, { Component } from 'react'

export default class InputRef extends Component {
    constructor(props) {
        super(props)
    
        this.InputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount()
    {
        this.cbRef.focus()
        // this.InputRef.current.focus()
        // console.log(this.InputRef)
    }

    clickHandler = () => {
        alert(this.cbRef.value)
        // alert(this.InputRef.current.value)
    }
    

    render() {
        return (
            <div>
                <input type="text" ref={this.InputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Get Value</button>
            </div>
        )
    }
}
