import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Form from './components/Form';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <Form />
  </MuiThemeProvider>
);

export default App;
