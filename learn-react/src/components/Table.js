import React, { Component } from 'react'
import Column from './Columns'

export default class Table extends Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <Column />
                        </tr>
                    </thead>
                </table>
            </React.Fragment>
        )
    }
}
