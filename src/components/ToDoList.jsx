import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';

import AddToDo from './AddToDo.jsx';
import ToDo from './ToDo.jsx';
import ToDoDetail from './ToDoDetail.jsx';
import {
  fetchTodos,
  addTodo,
  updateTodo,
  removeTodos
} from '../actions/todos.js';

// styled components declarations
const ContainerStyle = styled.div`
  width: 400px;
  margin: auto;
  text-align: left;
  border-top: 1px solid #e4e4e4;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const HeaderStyle = styled.h2`
  text-align: center;
`;

const LoadingStyle = styled.h4`
  text-align: center;
`;

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
      loading: true,
      newTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchTodos()
    this.setState({
      todos: this.props.todos,
      loading: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        todos: nextProps.todos,
        loading: false
      });
    }
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  showDetail(id) {
    const todo = this.state.todos.filter(todo => todo.id === id)[0];
    this.setState({
      selected: todo,
      loading: false
    });
  }

  async handleReset(e) {
    await this.props.removeTodos();
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodo.trim()) {
      return;
    }
    const addedTodo = {
      id: uuidv4(),
      title: this.state.newTodo,
      isDone: false,
      createdAt: moment(),
      priority: 5,
      description: this.state.newTodo
    };
    await this.props.addTodo(addedTodo);
  }

  async toggleTodo(id) {
    const todo = this.state.todos.filter(todo => todo.id === id)[0];
    todo.isDone = !todo.isDone;
    await this.props.updateTodo(id, todo.isDone);
  }

  removeTodo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  }

  render() {
    console.log(this.state.selected);
    const todos = (
      <ContainerStyle>
        {this.state.todos.map(todo => (
          <ToDo
            toggleTodo={this.toggleTodo.bind(this, todo.id)}
            removeTodo={this.removeTodo.bind(this, todo.id)}
            showDetail={this.showDetail.bind(this, todo.id)}
            key={todo.id}
            {...todo}
          />
        ))}
        {this.state.selected !== undefined && <ToDoDetail
          title = {this.state.selected.title}
          isDone = {this.state.selected.isDone ? 'Yes' : 'No'}
          createdAt = {this.state.selected.createdAt}
        />}
        <AddToDo
          handleChange={this.handleChange}
          handleReset={this.handleReset}
          handleSubmit={this.handleSubmit}
          value={this.state.newTodo}
          isSubmitting={this.props.isLoading}
        />
      </ContainerStyle>
    );
    return (
      <ContainerStyle>
        <HeaderStyle> ToDo List </HeaderStyle>
        { this.state.loading ? (
          <LoadingStyle> loading... </LoadingStyle>
        ) : (
            todos
        )}
      </ContainerStyle>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isLoading: state.todos.isLoading,
  error: state.todos.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos,
      addTodo,
      updateTodo,
      removeTodos
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);