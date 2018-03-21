import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton'
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { RadioList } from './questionDetail/RadioList';

const ANSWER_TYPES = {
  0: ({ answers, addAnswer, id }) => <RadioList answers={ answers } addAnswer={ addAnswer } id={ id } />,
  1: () => <Checkbox />,
  2: () => <TextField />
};

export class Question extends Component {
  
  state = {
    value: 0
  };

  handleChange = (evt, index, value) => this.setState({ value });

  render() {

    const { deleteQuestion, id, answers, addAnswer } = this.props;

    return (
      <Card className='card'>
        <div className='question-left'>
          <TextField hintText='Вопрос' /><br/>
          { ANSWER_TYPES[this.state.value] && ANSWER_TYPES[this.state.value]() }
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
              primaryText='Раскрывающийся список' />
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
  