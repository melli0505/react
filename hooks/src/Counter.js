import React, {Component, useReducer, useState} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    // const [value, setValue] = useState(0); // [0] 초기 값 [1] setter
    const [state, dispatch] = useReducer(reducer, {name:'', nickname:''}); // dispatch = dispatch(action){}과 같다.
    // useReducer 첫번째 파라미터는 reducer 함수를 넣고, 두 번째에는 리듀서 기본 값
    const [name, nickname] = state;

    const onChange = e =>{
        dispatch(e.target);
    }
    // return (
    //     <div>
    //         <p>
    //             현재 카운터 값은 <b>{state.value}</b>입니다.
    //         </p>
    //         <button onClick={()=> dispatch({type: 'INCREMENT'})}>+ 1</button>
    //         <button onClick={()=> dispatch({type: 'DECREMENT'})}>- 1</button>
    //     </div>
    // );

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>
        </div>
    )
}

export default Counter;