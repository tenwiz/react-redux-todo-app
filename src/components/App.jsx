import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import Header from './Header.jsx';
import ToDoList from './ToDoList.jsx';
const ContainerStyle = styled.div`
  width: 400px;
  margin: auto;
  text-align: left;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <ContainerStyle>
        <Header/>
        <ToDoList />
      </ContainerStyle>
    </Provider>
  );
};

export default App;