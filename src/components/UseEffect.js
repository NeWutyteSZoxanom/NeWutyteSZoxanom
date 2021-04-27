import React from 'react';
import React, { useState, useEffect } from 'react';

function App() {
  const [type, setType] = useState('');
  const [data, setData] = useState([]);

  useEffect(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((json) => setData(json)),
    [type],
  );

  return (
    <div>
      <div>
        <span>
          <strong>type of:</strong>
          {type}
        </span>
      </div>
      <button onClick={() => setType('users')}>users</button>
      <button onClick={() => setType('todos')}>todos</button>
      <button onClick={() => setType('posts')}>posts</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UseEffect;
