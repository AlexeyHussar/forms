import React from 'react';
import { connect } from 'react-redux';
import { FormHeader } from './FormHeader';
import { QuestionHolder } from './questions/QuestionHolder';
import { addQuestion, deleteQuestion } from '../actions/index';

const Form = ({ questions, addQuestion, deleteQuestion }) => (
  <div>
    <FormHeader />
    <QuestionHolder 
      questions={ questions }
      addQuestion={ addQuestion }
      deleteQuestion={ deleteQuestion }
    />
  </div>
);

export default connect(
  state => ({ questions: state.questions }),
  { addQuestion, deleteQuestion }
)(Form);