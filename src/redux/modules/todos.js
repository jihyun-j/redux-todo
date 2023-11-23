// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // const newTodo = action.payload;
      return { ...state, id: action.payload.id };

    case "DELETE_TODO":
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
