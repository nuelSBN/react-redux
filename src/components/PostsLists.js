import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts } from '../redux/actions/postActions';
import PostComponent from './PostComponent';

export default function PostsLists() {
  const dispatch = useDispatch();

  const fetchPost = async () => {
    const res = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .catch((err) => {
        console.log('error', err);
      });
    dispatch(setPosts(res.data));
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container d-flex flex-wrap justify-content-between">
      <PostComponent />
    </main>
  );
}
