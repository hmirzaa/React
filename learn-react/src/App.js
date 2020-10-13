import React, { Component } from 'react'
   
import ClassCounter from './hooks/ClassCounter'
import HookCounter from './hooks/HookCounter'

export default class App extends Component {
  render() {
    return (
      <div>
        <center>
            <ClassCounter />
            <HookCounter />
        </center>
      </div> 
    )
  }
}
