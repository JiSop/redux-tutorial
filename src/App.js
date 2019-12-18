import React from 'react';
import './App.css';
import CounterContainerHook from './containers/CounterContainerHook';
import TasksContainerHook from './containers/TasksContainerHook';
// import CounterContainer from './containers/CounterContainer';
// import TasksContainer from './containers/TasksContainer';


function App() {
  // return (
  //   <div>
  //     <CounterContainer />
  //     <hr />
  //     <TasksContainer />
  //   </div>
  // );
  return (
    <div>
      <CounterContainerHook />
      <hr />
      <TasksContainerHook />
    </div>
  );
}

export default App;
