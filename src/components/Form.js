import React from 'react';
import { connect } from 'react-redux';
import { FormHeader } from './FormHeader';
import { QuestionHolder } from './questions/QuestionHolder';
import { addQuestion, deleteQuestion, addAnswer } from '../actions/index';

const Form = ({ questions, addQuestion, deleteQuestion, addAnswer }) => (
  <div>
    <FormHeader />
    <QuestionHolder 
      questions={ questions }
      addQuestion={ addQuestion }
      deleteQuestion={ deleteQuestion }
      addAnswer={ addAnswer }
    />
  </div>
);

export default connect(
  state => ({ questions: state.questions }),
  { addQuestion, deleteQuestion, addAnswer }
)(Form);