import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), count: 0, isCounting: true, direction: 'up' }]);
  };

  const removeCounter = (id) => {
    setCounters(counters.filter(counter => counter.id !== id));
  };

  return (<>
    <div className='col-md-12 col-sm-12 col-lg-12'>
      <div className="app bg-dark " >
        <header className="header ">
          <button onClick={addCounter} className='btn btn-outline-dark text-light counterbtn' >Add Counter</button>
        </header>
        <div className="container"><div className='col-md-12 col-sm-12 col-lg-12'><div className='row'>
          <div className="content">
            {counters.length === 0 && (
              <p className='text-light'>Click on Add Counter</p>
            )}
            <div className="grid">
              {counters.map(counter => (
                <div className='col-md-4 col-sm-12 col-lg-2'><div className='row'>
                  <Counter
                    key={counter.id}
                    counter={counter}
                    removeCounter={removeCounter}
                  />
                </div></div>
              ))}
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
