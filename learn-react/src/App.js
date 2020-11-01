import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

   
// import ClassCounter from './hooks/ClassCounter'
// import HookCounter from './hooks/HookCounter'
// import HookCounterTwo from './hooks/HookCounterTwo'
// import HookCounterThree from './hooks/HookCounterFour'
// import HookCounterFour from './hooks/HookCounterFour'
 import Content from './comp/Content'
 import Session from './comp/Session'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          
          <Switch>
            <Route exact path='/' component={Session} />
            <Route path='/home' component={Content} />

          </Switch>
        </Router>
      </div> 
    )
  }
}
