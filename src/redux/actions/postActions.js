import { ActionTypes } from '../constants/action-types';

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const selectedPosts = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post,
  };
};

export const addPost = (post) => {
  return {
    type: ActionTypes.ADD_POST,
    payload: post,
  };
};
