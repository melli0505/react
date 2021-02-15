import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경
const INSERT = 'todos/INSERT'; // 새로운 todos 등록
const TOGGLE = 'todos/TOGGLE'; // 체크박스 관리
const REMOVE = 'todos/REMOVE'; // todo 제거

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert 호출 때마다 1씩 증가
export const insert = createAction(INSERT, text => ({
        id: id++,
        text,
        done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos:[
        {
            id: 1,
            text: 'redux toturial',
            done: true
        },
        {
            id: 2,
            text: 'use react and redux',
            done: false
        }
    ]
};

const todos = handleActions(
    {
      [CHANGE_INPUT]: (state, { payload: input }) =>
        produce(state, draft => {
          draft.input = input;
        }),
      [INSERT]: (state, { payload: todo }) =>
        produce(state, draft => {
          draft.todos.push(todo);
        }),
      [TOGGLE]: (state, { payload: id }) =>
        produce(state, draft => {
          const todo = draft.todos.find(todo => todo.id === id);
          todo.done = !todo.done;
        }),
      [REMOVE]: (state, { payload: id }) => 
        produce(state, draft => {
          const index = draft.todos.findIndex(todo => todo.id === id);
          draft.todos.splice(index, 1);
        }),
    },
    initialState,
  );

// function todos(state=initialState, action){
//     switch(action.type){
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state
//     }
// }

export default todos;