import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

// 미들웨어 redux-thunk 비동기 요청 적용전
// import { decrease, increase } from '../modules/counter';
// import { bindActionCreators } from 'redux';
// const CounterContainer = ( { number, increase, decrease } ) => {
//   return (
//     <Counter
//       number={ number }
//       onIncrease={ increase }
//       onDecrease={ decrease }
//     />
//   );
// };
// 1. 일반적인 선언 방식
// const mapStateToProps = state => (
//   {
//     number: state.counter.number,
//   }
// );
// const mapDispatchToProps = dispatch => (
//   {
//     increase: () => {
//       dispatch( increase() );
//     },
//     decrease: () => {
//       dispatch( decrease() );
//     },
//   }
// );
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )( CounterContainer );
// 2. connect 내부에서 익명 함수로 선언하는 방식
// export default connect(
//   state => (
//     {
//       number: state.counter.number,
//     }
//   ),
//   dispatch => (
//     {
//       increase: () => dispatch( increase() ),
//       decrease: () => dispatch( decrease() ),
//     }
//   )
// )( CounterContainer );
// 3. bindActionCreators 유틸 함수 사용
// export default connect(
//   state => (
//     {
//       number: state.counter.number,
//     }
//   ),
//   dispatch => bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   ),
// )( CounterContainer );
// 4. 파라미터를 액션 생성 함수로 이루어진 객체로 사용하는 방식
// export default connect(
//   state => (
//     {
//       number: state.counter.number,
//     }
//   ),
//   {
//     increase,
//     decrease,
//   },
// )( CounterContainer );

const CounterContainer = ( { number, increaseAsync, decreaseAsync } ) => {
  return (
    <Counter
      number={ number }
      onIncrease={ increaseAsync }
      onDecrease={ decreaseAsync }
    />
  );
};

export default connect(
  state => (
    {
      number: state.counter.number,
    }
  ),
  {
    increaseAsync,
    decreaseAsync,
  },
)( CounterContainer );