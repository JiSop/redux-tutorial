import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/tasks';
import Tasks from '../components/Tasks';
import useActions from '../lib/useActions';

// 커스텀 훅 useActions 적용 전
// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';


const TasksContainerHook = () => {
  const { input, tasks } = useSelector( ( { tasks } ) => (
      {
        input: tasks.input,
        tasks: tasks.tasks,
      }
    ),
  );

  // 커스텀 훅 useActions 적용 전
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback( input => dispatch( changeInput( input ) ), [ dispatch ] );
  // const onInsert = useCallback( text => dispatch( insert( text ) ), [ dispatch ] );
  // const onToggle = useCallback( id => dispatch( toggle( id ) ), [ dispatch ] );
  // const onRemove = useCallback( id => dispatch( remove( id ) ), [ dispatch ] );

  const  [ onChangeInput, onInsert, onToggle, onRemove ] = useActions(
    [ changeInput, insert, toggle, remove ],
    []
  );

  return (
    <Tasks
      input={ input }
      tasks={ tasks }
      onChangeInput={ onChangeInput }
      onInsert={ onInsert }
      onToggle={ onToggle }
      onRemove={ onRemove }
    />
  );
};

export default TasksContainerHook;