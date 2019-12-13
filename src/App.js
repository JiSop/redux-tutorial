import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TasksContainer from './containers/TasksContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TasksContainer />
    </div>
  );
}

export default App;
