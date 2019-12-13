import React from 'react';

const TaskItem = ( { task, onToggle, onRemove } ) => {
  return (
    <div>
      <input type="checkbox"/>
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Tasks = ( { input, tasks, onChangeInput, onInsert, onToggle, onRemove } ) => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={ onSubmit }>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
};

export default Tasks;