import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [value, setValue] = useState('in');
  const renderCount = useRef(1);
  const imputRef = useRef(null);

  useEffect(() => renderCount.current++);

  const focus = () => imputRef.current.focus();
  return (
    <div>
      <span>render count: {renderCount.current}</span>
      <input ref={imputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default App;
