import React from 'react';

const TaskItem = ( { task, onToggle, onRemove } ) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={ () => onToggle( task.id ) }
        checked={ task.done }
        readOnly={ true }
      />
      <span
        style={ { textDecoration: task.done ? 'line-through' : 'none' } }
      >
        { task.text }
      </span>
      <button
        onClick={ () => onRemove( task.id ) }
      >
        삭제
      </button>
    </div>
  );
};

const Tasks = ( { input, tasks, onChangeInput, onInsert, onToggle, onRemove } ) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert( input );
    onChangeInput( '' );
  };
  const onChange = e => onChangeInput( e.target.value );
  return (
    <div>
      <form onSubmit={ onSubmit }>
        <input
          value={ input }
          onChange={ onChange }
        />
        <button type="submit">등록</button>
      </form>
      <div>
        { tasks.map( task => (
          <TaskItem
            task={ task }
            key={ task.id }
            onToggle={ onToggle }
            onRemove={ onRemove }
          />
        ) ) }
      </div>
    </div>
  );
};

export default Tasks;