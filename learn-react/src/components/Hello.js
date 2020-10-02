import React from 'react'

const Hello = () => {
/*
    return (
    <div>
        <h1>Hello World</h1>
        
    </div>
    )

    class => className
    for => htmlFor
    tableindex => tabIndex
        onclick => onClick
*/

return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'} , 
    React.createElement('h1', null, 'Hello World')

)
        
}

export default Hello