import React from 'react';
import { Question } from './Question';
import { AddQuestionButton } from './AddQuestionButton';

export const QuestionHolder = ({ questions, addQuestion, deleteQuestion, addAnswer }) => (
  <div>
    <div>
      { questions.length
        ? ( <ul>
            { questions.map(question => (
              <li key={ question.id }>
                <Question
                  id={ question.id }
                  deleteQuestion={ () => deleteQuestion(question.id) }
                  addAnswer={ () => addAnswer(question.id) }
                  answers={ question.answers } />
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