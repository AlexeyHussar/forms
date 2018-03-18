import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Radiobutton from 'material-ui/RadioButton'
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const COMP_MAP = {
  0: props => <Radiobutton { ...props } />,
  1: props => <Checkbox { ...props } />,
  2: props => <TextField name='answer' { ...props } />
};

export class Question extends Component {
  
  state = {
    value: 0
  };

  handleChange = (evt, index, value) => this.setState({ value });

  render() {

    const { deleteQuestion, id } = this.props;

    return (
      <Card>
        <div>
          <TextField hintText='Вопрос' /><br/>
          { COMP_MAP[this.state.value] && COMP_MAP[this.state.value]() }
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
              primaryText='Несколько из списка' />
            <MenuItem value={ 2 }
              primaryText='Текст' />              
          </DropDownMenu>
        </div>
        <IconButton tooltip='Удалить вопрос'
          onClick={ () => deleteQuestion(id) }
        >
          <ActionDelete />
        </IconButton>
      </Card>
    );
  };
};
  