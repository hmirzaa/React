import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </center>
    </div>
  );
}

export default Counter;