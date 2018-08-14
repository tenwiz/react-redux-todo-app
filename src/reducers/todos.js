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

const initialState = {
    todos: [],
    isLoading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
      case TODO_FETCH_REQUEST:
        return {
          ...state,
          error: null,
          isLoading: true
        };
  
      case TODO_FETCH_SUCCESS:
        return {
          ...state,
          error: null,
          isLoading: false,
          todos: action.data
        };
  
      case TODO_ADD_REQUEST:
        return {
          ...state,
          error: null,
          isLoading: true
        };
  
      case TODO_ADD_SUCCESS:
        return {
          ...state,
          error: null,
          isLoading: false
        };
  
      case TODO_UPDATE_REQUEST:
        return {
          ...state,
          error: null,
          isLoading: true
        };
  
      case TODO_UPDATE_SUCCESS:
        return {
          ...state,
          error: null,
          isLoading: false
        };
  
      case TODO_REMOVE_REQUEST:
        return {
          ...state,
          error: null,
          isLoading: true
        };
  
      case TODO_REMOVE_SUCCESS:
        return {
          ...state,
          error: null,
          isLoading: false
        };
  
      case TODO_FETCH_ERROR:
      case TODO_ADD_ERROR:
      case TODO_UPDATE_ERROR:
      case TODO_REMOVE_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error
        };
  
      default:
        return state;
    }
};
  
