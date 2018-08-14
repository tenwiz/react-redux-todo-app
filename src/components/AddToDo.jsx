import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  margin-left: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  :hover {
    cursor: pointer;
  }
`;

const InputStyle = styled.input`
  width: 236px;
  height: 1.4rem;
  font-size: 1rem;
  border: solid 1px;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 15px;
    height: 40px;
    border: solid 1px;
    box-sizing: border-box;
  }
`;

const AddTodo = props => (
  <div style={{ padding: '5px', marginTop: '15px' }}>
    <form onSubmit={props.handleSubmit}>
      <InputStyle
        type="text"
        name="addtodo"
        onChange={props.handleChange}
        value={props.value}
        placeholder="Add ToDo"
      />
      <ButtonStyle disabled={props.isSubmitting} type="submit">Add</ButtonStyle>
      <ButtonStyle onClick={props.handleReset}>Reset</ButtonStyle>
    </form>
  </div>
);

export default AddTodo;