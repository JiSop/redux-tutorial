import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TasksContainer from './containers/TasksContainer';
// import CounterContainerHook from './containers/CounterContainerHook';
// import TasksContainerHook from './containers/TasksContainerHook';

// import CounterContainer from './containers/CounterContainer';
// import TasksContainer from './containers/TasksContainer';
// function App() {
//   return (
//     <div>
//       <CounterContainer />
//       <hr />
//       <TasksContainer />
//     </div>
//   );
// }

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
