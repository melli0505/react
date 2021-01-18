import React, {Component, useEffect, useReducer, useState} from 'react';
import useInputs from './useInputs';

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    }
}

const Info = () => {
    // const [name, setName] = useState('');

    // const [nickName, setNickName] = useState('');

    // const  [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });

    // custom hook
    const [state, dispatch] = useInputs({
        name: '',
        nickname: ''
    })

    const [name, nickname] = state;

    const onChange = (e) => {
        dispatch(e.target) // state를 set, e.target 자체를 reducer의 action으로 사용한 사례
    }


/*
    useEffect(()=> {
        console.log('effect');
        console.log({ name });
        return() => {
            console.log('clean up');
            console.log(name);
        }
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    };
*/
    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                {/* <input name="nickname" value={nickname} onChange={onChangeNickName}></input> */}
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>  
            <div>
                <div>
                    <b>name : </b>{name}
                </div>
                <div>
                    <b>nick name : </b>{nickname}
                </div>
            </div>
        </div>
    );
}

export default Info;