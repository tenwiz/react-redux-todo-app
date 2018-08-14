import axios from 'axios';
import moment from 'moment';
import { API_BASE_URL } from '../constants';
import {
  TODO_FETCH_REQUEST,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_ERROR,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_ADD_ERROR,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_ERROR,
  TODO_REMOVE_REQUEST,
  TODO_REMOVE_SUCCESS,
  TODO_REMOVE_ERROR
} from '../actionTypes';

export const fetchTodos = () => async dispatch => {
  try {
    dispatch({ type: TODO_FETCH_REQUEST });

    const url = `${API_BASE_URL}/todos`;

    const { data } = await axios({
      method: 'GET',
      url,
    });

    dispatch({ type: TODO_FETCH_SUCCESS, data });
  } catch (error) {
    dispatch({ type: TODO_FETCH_ERROR, error: error.response.data });
  }
};

export const addTodo = (todo) => async dispatch => {

  try {
    dispatch({ type: TODO_ADD_REQUEST });

    const url = `${API_BASE_URL}/todos`;

    await axios({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: todo
    });

    dispatch({ type: TODO_ADD_SUCCESS });

    await dispatch(fetchTodos());
    
  } catch (error) {
    dispatch({ type: TODO_ADD_ERROR, error: error.response.data });
  }
};

export const updateTodo = (index, isDone) => async dispatch => {
  try {
    dispatch({ type: TODO_UPDATE_REQUEST });

    const url = `${API_BASE_URL}/todos/${index}`;

    const { data } = await axios({
      method: 'PUT',
      url,
      data: { isDone },
    });

    dispatch({ type: TODO_UPDATE_SUCCESS, data });
    
    await dispatch(fetchTodos());

  } catch (error) {
    dispatch({ type: TODO_UPDATE_ERROR, error: error.response.data });
  }
};

export const removeTodos = () => async dispatch => {
  try {

    dispatch({ type: TODO_REMOVE_REQUEST });

    const url = `${API_BASE_URL}/reset`;

    const { data } = await axios({
      method: 'POST',
      url,
    });

    dispatch({ type: TODO_REMOVE_SUCCESS, data });
    
    await dispatch(fetchTodos());

  } catch (error) {
    dispatch({ type: TODO_REMOVE_ERROR, error: error.response.data });
  }
};
