import React from 'react'

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hy {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet