import React, { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/couter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// 위 두 가지를 하나로 합칠 수도 있음.
/*
export default connect(
    state => ({
        number: state.counter.number
    }),
    dispatch => 
        bindActionCreators( // dispatch를 각각 쓰지 않는 방법
            {
                increase,
                decrease,
            },
            dispatch,
        ),
)(CounterContainer);

// mapDispatchToProps의 파라미터를 객체로 넣는 방법
export default connect(
    state => ({
        number: state.counter.number
    }),
    {
			increase,
			decrease,
		},
)(CounterContainer);

*/

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default React.memo(CounterContainer);