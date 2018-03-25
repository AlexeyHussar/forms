import { ADD_QUESTION, DELETE_QUESTION, ADD_ANSWER, DELETE_ANSWER } from '../actions/actionTypes';

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
    case ADD_ANSWER: 
      return {
        ...state,
        questions: state.questions
          .map(q => q.id === action.id
            ? { ...q, answers: [...q.answers, action.payload] }
            : q
          )
      };
    case DELETE_ANSWER:
      return {
        ...state,
        questions: state.questions
          .map(q => q.id === action.payload.id
            ? { ...q, answers: q.answers
                .filter(a => a.id !== action.payload.answerId) }
            : q
          )
      };
    default:
      return state;
  }
};

export default appReducer;

