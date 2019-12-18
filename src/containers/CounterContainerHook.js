import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainerHook = () => {
  const number = useSelector( state => state.counter.number );
  const dispatch = useDispatch();
  const onIncrease = useCallback( () => dispatch( increase() ), [ dispatch ] );
  const onDecrease = useCallback( () => dispatch( decrease() ), [ dispatch ] );

  // useCallback을 사용해서 최적화 전: 숫자가 바뀌어서 리렌더링될 때마다 함수가 새롭게 만들어 진다.
  // return (
  //   <Counter
  //     number={ number }
  //     onIncrease={ () => dispatch( increase() ) }
  //     onDecrease={ () => dispatch( decrease() ) }
  //   />
  // );

  return (
    <Counter
      number={ number }
      onIncrease={ onIncrease }
      onDecrease={ onDecrease }
    />
  );
};

export default CounterContainerHook;