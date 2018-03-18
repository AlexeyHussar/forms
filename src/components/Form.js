import React from 'react';
import { connect } from 'react-redux';
import { FormHeader } from './FormHeader';
import { QuestionHolder } from './questions/QuestionHolder';
import { addQuestion } from '../actions/index';

const Form = ({ questions, addQuestion }) => (
  <div>
    <FormHeader />
    <QuestionHolder 
      questions={ questions }
      addQuestion={ addQuestion }
    />
  </div>
);

export default connect(
  state => ({ questions: state.questions }),
  { addQuestion }
)(Form);