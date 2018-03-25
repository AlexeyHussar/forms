import { v4 } from 'uuid';
import {
  ADD_QUESTION,
  DELETE_QUESTION,
  ADD_ANSWER,
  DELETE_ANSWER,
/*   ADD_LIST_ANSWER */
} from './actionTypes';

export const addQuestion = () => ({
  type: ADD_QUESTION,
  payload: {
    id: v4(),
    answers: [{ id: 0 }]
  }
});

/* export const addQuestion = () => ({
  type: ADD_QUESTION,
  payload: {
    id: v4(),
    answers: {
      radioAnswers: [{ id: v4() }],
      listAnswers: [{ id: v4() }],
      textAnswer: ''
    }
  }
}); */

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  payload: id
});

export const addAnswer = (id) => ({
  type: ADD_ANSWER,
  id,
  payload: { id: v4() }
});

/* export const addListAnswer = (id) => ({
  type: ADD_LIST_ANSWER,
  payload: {
    id,
    answer: { id: v4() }
  }
}); */

export const deleteAnswer = (id, answerId) => ({
  type: DELETE_ANSWER,
  payload: {
    id,
    answerId
  }
});
