import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.li`
  cursor: pointer;
  padding: 10px;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  list-style: none;
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
`;

const NameStyle = styled.span`
  margin-left: 20px;
  font-size: 18px;
`;

const XStyle = styled.div`
  float: right;
  :hover {
    color: red;
    cursor: pointer;
  }
`;

// ToDo is a stateless functional component and is therefore pure
const ToDo = props => (
  <ListStyle onClick={props.showDetail} isDone={props.isDone}>
    <input
      type="checkbox"
      value={props.id}
      checked={props.isDone}
      onChange={props.toggleTodo}
    />
    <NameStyle> {props.title} </NameStyle>
    <XStyle onClick={props.removeTodo}>✘</XStyle>
  </ListStyle>
);

export default ToDo;