import { v4 } from 'uuid';
import { ADD_QUESTION, DELETE_QUESTION } from './actionTypes';

export const addQuestion = () => ({
  type: ADD_QUESTION,
  payload: {
    id: v4(),
    a: 1 
  }
});

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  payload: id
});