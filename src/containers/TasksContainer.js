import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/tasks';
import Tasks from '../components/Tasks';

const TasksContainer = ( { input, tasks, changeInput, insert, toggle, remove } ) => {
  return (
    <Tasks
      input={ input }
      tasks={ tasks }
      onChangeInput={ changeInput }
      onInsert={ insert }
      onToggle={ toggle }
      onRemove={ remove }
    />
  );
};

export default connect(
  ( { tasks } ) => (
    {
      input: tasks.input,
      tasks: tasks.tasks,
    }
  ),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)( TasksContainer );