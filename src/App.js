import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Tasks from './components/Tasks';

function App() {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Tasks />
    </div>
  );
}

export default App;
