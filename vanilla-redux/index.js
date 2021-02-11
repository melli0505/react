import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference});
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle: false,
    counter: 0
};

function reducer(state=initialState, action){
    switch(state, action){
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태를 불러온다.
    // toggle
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // counter
    counter.innerText = state.counter;


};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase());
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};