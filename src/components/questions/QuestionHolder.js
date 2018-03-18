import React from 'react';
import { QuestionList } from './QuestionList';
import { AddQuestionButton } from './AddQuestionButton';

export const QuestionHolder = ({ questions, addQuestion }) => (
  <div>
    <QuestionList questions={ questions } />
    <AddQuestionButton addQuestion={ () => addQuestion() } />
  </div>
);