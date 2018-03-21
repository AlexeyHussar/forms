import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export const AddQuestionButton = ({ addQuestion }) => (
  <IconButton tooltip='Добавить вопрос'
    onClick={ () => addQuestion() } >
    <ContentAdd 
    className='add-question-button' />
  </IconButton>
);