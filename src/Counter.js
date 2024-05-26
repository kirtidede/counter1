import React, { useState, useEffect } from 'react';

import './App.css'

function Counter({ counter, removeCounter }) {
  const [count, setCount] = useState(counter.count);
  const [isCounting, setIsCounting] = useState(counter.isCounting);
  const [direction, setDirection] = useState(counter.direction);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount(prevCount => (direction === 'up' ? prevCount + 1 : prevCount - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCounting, direction]);

  return (
    <div className="counter">
      <div className="count-display text-light">{count}</div>
      <div className="controls">
        <button onClick={() => setIsCounting(!isCounting)} className='btn btn-dark text-light counterbtn'>
          {isCounting ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => setDirection(direction === 'up' ? 'down' : 'up')} className='btn btn-dark text-light counterbtn'>
          {direction === 'up' ? 'Down' : ' Up'}
        </button>
        <button onClick={() => removeCounter(counter.id)} className='btn btn-dark text-light counterbtn'>Delete</button>
      </div>
    </div>
  );
}

export default Counter;
