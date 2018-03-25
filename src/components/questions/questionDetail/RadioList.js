import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../../actions/index';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import RadioChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import RadioUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import ContentClear from 'material-ui/svg-icons/content/clear';

class RadioList extends Component {

  state = {
    radioValue: false
  };

  onChangeRadio = (evt) => this.setState({ 
    
  });

  render() {

    const { answers, addAnswer, deleteAnswer, id } = this.props;

    return (
      <div>
        <List>
          { answers.map(a => (
            <ListItem
              key={ a.id }
              leftCheckbox={
                <Checkbox
                  onCheck={ this.onChangeRadio }
                  checked={ false }
                  checkedIcon={ <RadioChecked /> }
                  uncheckedIcon={ <RadioUnchecked /> }
                /> }
              rightIconButton={
                <IconButton tooltip='Удалить вопрос'
                  onClick={ () => deleteAnswer(id, a.id) }>
                  <ContentClear />
                </IconButton>
            }>
              <TextField name='questionField'
                hintText='Вопрос'/>
            </ListItem>)
          ) }
        </List>
        <FlatButton label='Добавить ответ' onClick={ () => addAnswer(id) }/>        
      </div>
    );
  }
};

export default connect(
  null,
  { deleteAnswer }
)(RadioList);


