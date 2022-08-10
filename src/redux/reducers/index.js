import { combineReducers } from 'redux';
import {
  postReducer,
  selectedPostReducer,
  addPostReducer,
} from './postReducer';

const reducers = combineReducers({
  allPosts: postReducer,
  post: selectedPostReducer,
  addPost: addPostReducer,
});

export default reducers;
