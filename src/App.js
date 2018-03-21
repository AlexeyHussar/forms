import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Form from './components/Form';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <div className='primary-container'>
      <Form />      
    </div>
  </MuiThemeProvider>
);

export default App;
