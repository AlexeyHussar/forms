import React from 'react';
import { Question } from './Question';

export const QuestionList = ({ questions, deleteQuestion }) => (
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
);