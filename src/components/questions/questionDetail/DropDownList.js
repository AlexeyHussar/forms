import React from 'react';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../../actions/index';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

const DropDownList = ({ answers, addAnswer, deleteAnswer, id }) => (
  <div className='drop-down-list'>
    <List>
      { answers.map(a => (
        <ListItem
          key={ a.id }
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

export default connect(
  null,
  { deleteAnswer }
)(DropDownList);