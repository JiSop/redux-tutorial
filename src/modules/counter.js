import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수에 redux-ations 적용 전
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 액션 생성 함수에 redux-actions 적용 후
export const increase = createAction( ( INCREASE ) );
export const decrease = createAction( ( DECREASE ) );

const initialState = {
  number: 0,
};

// 리듀서 함수에 redux-ations 적용 전
// function counter( state = initialState, action ) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// 리듀서 함수에 redux-actions 적용 후
// handleAction 함수의 첫 번째 파라미터는 각 액션에 대한 업데이트 함수, 두 번째 파라미터는 초기 상태
const counter = handleActions(
  {
    [INCREASE]: ( state, action ) => ( { number: state.number + 1 } ),
    [DECREASE]: ( state, action ) => ( { number: state.number - 1 } ),
  },
  initialState,
);

export default counter;