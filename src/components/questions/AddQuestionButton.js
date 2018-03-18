import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export const AddQuestionButton = ({ addQuestion }) => (
  <FlatButton label='Добавить вопрос'
    onClick={ () => addQuestion() }
  />
);