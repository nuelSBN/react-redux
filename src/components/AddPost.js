import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addPost } from '../redux/actions/postActions';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsPending(true);
    const postObj = { title, body };
    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          postObj,
        }
      );
      console.log('post have been made');
      setIsPending(false);
      dispatch({ type: addPost(res.data) });
      setTitle('');
      setBody('');
    } catch (err) {
      console.log(err, 'error here');
    }
    console.log(postObj);
  };

  return (
    <div className="container">
      <h3>Add new post</h3>
      <form onSubmit={submitHandler}>
        <div className="">
          <label>post title</label>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Post Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <label>post body</label>
          <br />
          <textarea
            className="form-control mb-3"
            value={body}
            placeholder="Type Your Post Here..."
            required
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        {!isPending && <button className="btn btn-danger">Upload Post</button>}
        {isPending && (
          <button disabled className="btn btn-danger">
            Uploading Post....
          </button>
        )}
      </form>
    </div>
  );
}
