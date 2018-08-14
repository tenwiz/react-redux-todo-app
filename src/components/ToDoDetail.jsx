import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListStyle = styled.li`
  margin-top: 25px;
  padding: 10px;
  border: 1px solid #e4e4e4;
  list-style: none;
`;

const TitleStyle = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 24px;
`;

const NameStyle = styled.div`
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
const ToDoDetail = props => (
  <ListStyle>
    <TitleStyle> ToDo Detail </TitleStyle>
    <NameStyle> Title: {props.title} </NameStyle>
    <NameStyle> IsDone? {props.isDone} </NameStyle>
    <NameStyle> CreatedAt: {moment(props.createdAt).format('MMMM DD YYYY')} </NameStyle>
  </ListStyle>
);

export default ToDoDetail;