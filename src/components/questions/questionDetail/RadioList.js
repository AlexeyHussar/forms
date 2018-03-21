import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export const RadioList = ({ answers, addAnswer, id }) => (
  <div>
    <RadioButtonGroup name='radiolist'>
      { answers.map(a => <RadioButton key={ a.id }
        label={ <TextField name='answerField' style={{zIndex: '999'}} /> } />) }
    </RadioButtonGroup>
    <FlatButton label='Добавить вопрос' onClick={ () => addAnswer(id) }/>
  </div>
);

