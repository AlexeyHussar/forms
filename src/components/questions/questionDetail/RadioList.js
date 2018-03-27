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
    radioValue: ''
  };

  onChangeRadio = (boxId) => this.setState({ 
    radioValue: boxId
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
                  value={ a.id }
                  onCheck={ () => this.onChangeRadio(a.id) }
                  checked={ this.state.radioValue === a.id }
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
                hintText='Ответ'/>
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


