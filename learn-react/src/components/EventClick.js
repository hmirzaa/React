import React from 'react'

function Event()
{
    function EventHandler()
    {
        console.log("Clicked")
    }

    return(
        <div>
            <center>
                <button onClick={EventHandler}>Click</button>
            </center>
        </div>
    )
}

export default Event