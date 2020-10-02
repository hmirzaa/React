import React from 'react';

function Person({person, key}) {

   return (
    <div>
      <h2>{key}</h2>
      <h2>{person.id}</h2>
      <h2>{person.name}</h2>
    </div>
  );
}

export default Person;