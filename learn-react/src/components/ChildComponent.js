import React from 'react'

function Child(props)
{


    return(
        <div>
            <button onClick={() => props.greet('child')}>Greet Parent</button>
        </div>
    )
}

export default Child