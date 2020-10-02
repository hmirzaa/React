import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends Component {
    render() {
        return ReactDOM.createPortal (
            <div>
                <h2>This is Portal</h2>
            </div>,
            document.getElementById('portal')
        )
    }
}
