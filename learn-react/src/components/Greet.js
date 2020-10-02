import React from 'react'

//const Greet = ({name, heroName}) => {
const Greet = props => {
 
    const {name, heroName} = props
   // const {message, counter} = state 

    return (
        <div>
            <h1>
                Hy {name} a.k.a {heroName}
            </h1>
          
        </div>
    )
}

export default Greet