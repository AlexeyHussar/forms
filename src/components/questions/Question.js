import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Radiobutton from 'material-ui/RadioButton'

export class Question extends Component {
  
  state = {
    value: 0
  };

  handleChange = (evt, index, value) => this.setState({ value });

  render() {
    return (
      <Card>
        <div>
          <TextField hintText='Вопрос' /><br/>
          { this.state.value === 0 && <Radiobutton /> }
          { this.state.value === 1 && <Checkbox /> }
          { this.state.value === 2 && <TextField name='answer' /> }
        </div>
        <div>
          <DropDownMenu
            value={ this.state.value }
            onChange={ this.handleChange }
            anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
          >
            <MenuItem value={ 0 }
              primaryText='Один из списка' />
            <MenuItem value={ 1 }
              primaryText='Несколько из спика' />
            <MenuItem value={ 2 }
              primaryText='Текст' />              
          </DropDownMenu>
        </div>
      </Card>
    );
  };
};
  