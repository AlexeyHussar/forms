import React from 'react';
//import { QuestionList } from './QuestionList';
import { Question } from './Question';
import { AddQuestionButton } from './AddQuestionButton';

export const QuestionHolder = ({ questions, addQuestion, deleteQuestion }) => (
  <div>
{/*     <QuestionList questions={ questions }
      deleteQuestion={ () => deleteQuestion() } /> */}
    <div>
      { questions.length
        ? ( <ul>
            { questions.map(question => (
              <li key={ question.id }>
                <Question
                  id={ question.id }
                  deleteQuestion={ () => deleteQuestion(question.id) } />
              </li>
            )) }
          </ul> )
        : <p>
            Добавьте вопрос
          </p>
      }
    </div>
    <AddQuestionButton addQuestion={ () => addQuestion() } />
  </div>
);