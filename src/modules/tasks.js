const CHANGE_INPUT = 'tasks/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'tasks/INSERT'; // 새로운 task를 등록
const TOGGLE = 'tasks/TOGGLE'; // task를 체크를 토글
const REMOVE = 'tasks/REMOVE'; // task를 제거

export const changeInput = input => (
  {
    type: CHANGE_INPUT,
    input,
  }
);

let id = 3; // insert가 호출 될때마다 1씩 더해진다

export const insert = text => ({
  type: INSERT,
  task: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  input: '',
  tasks: [
    {
      id: 1,
      text: '리덕스 기초',
      done: true
    },
    {
      id: 2,
      text: '리액트와 리덕스',
      done: false
    }
  ]
};

function tasks( state = initialState, action) {
  switch ( action.type ) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        tasks: state.tasks.concat( action.task )
      };
    case TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map( task => task.id === action.id ? { ...task, done: !task.done } : task )
      };
    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter( task => task.id !== action.id )
      };
    default:
      return state;
  }
}

export default tasks;