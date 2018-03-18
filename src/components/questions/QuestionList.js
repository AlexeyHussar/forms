import React from 'react';
import { Question } from './Question';

export const QuestionList = ({ questions }) => (
  <div>
    { questions.length
      ? ( <ul>
          { questions.map(question => (
            <li key={ question.id }>
              <Question { ...question } />
            </li>
          )) }
        </ul> )
      : <p>
          Добавьте вопрос
        </p>
    }
  </div>
);