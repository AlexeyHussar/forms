import { ADD_QUESTION, DELETE_QUESTION } from '../actions/actionTypes';

const initialState = {
  questions: []
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [
          ...state.questions,
          action.payload
        ]
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions
          .filter(q => q.id !== action.payload)
      };
    default:
      return state;
  }
};

export default appReducer;