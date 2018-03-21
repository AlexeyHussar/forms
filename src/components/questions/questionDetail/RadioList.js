import React from 'react';
//import { connect } from 'react-redux';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
//import { addAnswer } from '../../../actions/index';

export const RadioList = ({ answers, addAnswer, id }) => (
  <div>
    <RadioButtonGroup name='radiolist'>
      { answers.map(a => <RadioButton key={ a.id }
        label={ <TextField style={{zIndex: '999'}} /> } />) }
    </RadioButtonGroup>
    <FlatButton label='Добавить вопрос' onClick={ () => addAnswer(id) }/>
  </div>
);

/* export default connect(
  state => ({ answers: state.answers }),
  { addAnswer }
)(RadioList); */

