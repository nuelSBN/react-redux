import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectedPosts } from '../redux/actions/postActions';

export default function PostDetails() {
  const post = useSelector((state) => state.post);

  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchPostDetails = async () => {
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .catch((err) => {
        console.log('error', err);
      });

    dispatch(selectedPosts(res.data));
  };
  useEffect(() => {
    if (id && id !== '') fetchPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const { title, body } = post;
  return (
    <div className="container card p-3 mb-4 vh-100 d-flex justify-content-center align-items-center">
      {Object.keys(post).length === 0 ? (
        <div>loading....</div>
      ) : (
        <div>
          <h2 className="fs-5 fw-bold text-capitalize card-title">
            post title: {title}
          </h2>
          <p className="fs-6">{body}</p>
        </div>
      )}
    </div>
  );
}
