import { v4 } from 'uuid';
import { ADD_QUESTION, DELETE_QUESTION, ADD_ANSWER, DELETE_ANSWER } from './actionTypes';

export const addQuestion = () => ({
  type: ADD_QUESTION,
  payload: {
    id: v4(),
    answers: [{ id: 0 }]
  }
});

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  payload: id
});

export const addAnswer = (id) => ({
  type: ADD_ANSWER,
  id,
  payload: { id: v4() }
});

export const deleteAnswer = (id, answerId) => ({
  type: DELETE_ANSWER,
  payload: {
    id,
    answerId
  }
});
