import React, { Component } from 'react'
// import { Greet } from './components/Home'
//import Class from './components/Class'
//import Counter from './components/Counter'
//import Hello from './components/Hello'
//import Greet from './components/Props'
//import State from './components/State'
//import NewCounter from './components/NewCounter'
// import Greet from './components/Greet'

// import Event from './components/EventClick'
// import ClassClick from './components/ClassClick'
// import EventBinding from './components/EventBinding'
// import ParentComponent from './components/ParentComponent'
// import Conditional from './components/Conditional'
// import Arrays from './components/Arrays'
// import List from './components/List'
// import Style from './components/Style'
// import FormHandling from './components/FormHandling'
// import LifeCycle from './components/LifeCycle'
// import Fragment from './components/Fragment'
// import Table from './components/Table'
// import Parent from './components/Parent'
// import InputRef from './components/InputRef'
// import FocusInput from './components/FocusInput'
// import FRParentInput from './components/FRParentInput'
// import Portal from './components/Portal'
import Hero from './components/Hero'
import ErrorBoundry from './components/ErrorBoundry'



//  <Greet name="Hamza" heroName="Mughal">
//             <p>This is props children</p>
//           </Greet>
//         <Greet name="Saif" heroName="Khawaja">
//             <p>This is props children</p>
//           </Greet>
        
       
export default class App extends Component {
  render() {
    return (
      <div>
        <center>
         <ErrorBoundry>
          <Hero heroName="Batman" />
          </ErrorBoundry>

          <ErrorBoundry>
          <Hero heroName="Superman" />
          </ErrorBoundry>
          
          <ErrorBoundry>
          <Hero heroName="Joker" />
          </ErrorBoundry>
        
        </center>
      </div> 
    )
  }
}