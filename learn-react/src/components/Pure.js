import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
    render() {
        console.log("Pure Called")
        return (
            <div>
                <p>This is Pure Component {this.props.name}</p>
            </div>
        )
    }
}

export default Pure
