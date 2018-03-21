import { v4 } from 'uuid';
import { ADD_QUESTION, DELETE_QUESTION, ADD_ANSWER } from './actionTypes';

export const addQuestion = () => ({
  type: ADD_QUESTION,
  payload: {
    id: v4(),
    answers: []
  }
});

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  payload: id
});

export const addAnswer = (id) => ({
  type: ADD_ANSWER,
  payload: {
    id,
    answer: 'item'
  }
});