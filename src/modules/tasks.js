import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'tasks/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'tasks/INSERT'; // 새로운 task를 등록
const TOGGLE = 'tasks/TOGGLE'; // task를 체크를 토글
const REMOVE = 'tasks/REMOVE'; // task를 제거

// 액션 생성 함수에 redux-actions 적용 전
// export const changeInput = input => (
//   {
//     type: CHANGE_INPUT,
//     input,
//   }
// );
// let id = 3; // insert가 호출 될때마다 1씩 더해진다
// export const insert = text => ({
//   type: INSERT,
//   task: {
//     id: id++,
//     text,
//     done: false
//   }
// });
// export const toggle = id => ({
//   type: TOGGLE,
//   id
// });
// export const remove = id => ({
//   type: REMOVE,
//   id
// });

// 액션 생성 함수에 redux-actions 적용 후
export const changeInput = createAction( CHANGE_INPUT, input => input );

let id = 3;
export const insert = createAction( INSERT, text => (
  {
    id: id++,
    text,
    done: false,
  }
) );

export const toggle = createAction( TOGGLE, id => id );

export const remove = createAction( REMOVE, id => id );

const initialState = {
  input: '',
  tasks: [
    {
      id: 1,
      text: '리덕스 기초',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스',
      done: false,
    },
  ],
};

// 리듀서 함수에 redux-actions 적용 전
// function tasks( state = initialState, action ) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         tasks: state.tasks.concat( action.task ),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         tasks: state.tasks.map( task => task.id === action.id ? { ...task, done: !task.done } : task ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         tasks: state.tasks.filter( task => task.id !== action.id ),
//       };
//     default:
//       return state;
//   }
// }

// 리듀서 함수에 redux-actions 적용 후
// const tasks = handleActions(
//   {
//     [CHANGE_INPUT]: ( state, action ) => ( { ...state, input: action.payload } ),
//     [INSERT]: ( state, action ) => ( { ...state, tasks: state.tasks.concat( action.payload ) } ),
//     [TOGGLE]: ( state, action ) => (
//       {
//         ...state,
//         tasks: state.tasks.map( task =>
//           task.id === action.payload ? { ...task, done: !task.done } : task ),
//       }
//     ),
//     [REMOVE]: ( state, action ) => (
//       {
//         ...state,
//         tasks: state.tasks.filter( task => task.id !== action.id ),
//       }
//     ),
//   },
//   initialState,
// );

// 리듀서 함수에 redux-actions 적용 후, action을 객체 비구조화 할당해서 가독성 높임
const tasks = handleActions(
  {
    [CHANGE_INPUT]: ( state, { payload: input } ) => ( { ...state, input } ),
    [INSERT]: ( state, { payload: task } ) => ( { ...state, tasks: state.tasks.concat( task ) } ),
    [TOGGLE]: ( state, { payload: id } ) => (
      {
        ...state,
        tasks: state.tasks.map( task =>
          task.id === id ? { ...task, done: !task.done } : task ),
      }
    ),
    [REMOVE]: ( state, { payload: id } ) => (
      {
        ...state,
        tasks: state.tasks.filter( task => task.id !== id ),
      }
    ),
  },
  initialState,
);

export default tasks;