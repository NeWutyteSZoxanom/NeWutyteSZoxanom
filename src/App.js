import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({
    title: 'chtoto',
    date: Date.now(),
  });

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function izmenit() {
    setState((prev) => {
      return {
        ...prev,
        title: 'cdcdcd',
      };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>добавить</button>
      <button onClick={decrement}>убрать</button>
      <button onClick={izmenit}>izmenit</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
