import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
} from "../actions";
const initialState = [
  { id: 1, todo: "Code 2 hours", completed: false },
  { id: 2, todo: "Learn Next.js", completed: false },
  { id: 3, todo: "Eat Something", completed: true },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      const updatedTodo = state.filter((item) => item.id !== action.payload);
      return updatedTodo;
    case UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      return updatedArray;
    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;
    default:
      return state;
  }
};
