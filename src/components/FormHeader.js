import React from 'react';
import { Card } from 'material-ui/Card';
import { TextField } from 'material-ui';

export const FormHeader = () => (
  <Card className='card'>
    <TextField name='formName'
      defaultValue='Новая форма'
      hintText='Имя формы'
    /><br/>
    <TextField name='formDescription'
      defaultValue='Описание'
      hintText='Описание формы'
    />
  </Card>
)