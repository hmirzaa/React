import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, SetCount] = useState(initialCount)

    const IncrementFive = () => {
        for(let i = 0; i<5; i++){
            SetCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => SetCount(initialCount)}>Reset</button>
            <button onClick={() => SetCount(count + 1)}>Increment</button>
            <button onClick={() => SetCount(count - 1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
