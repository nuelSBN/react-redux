import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostComponent() {
  const posts = useSelector((state) => state.allPosts.posts);
  const renderList = posts.map((post) => {
    const { id, title, body } = post;

    return (
      <Link to={`/posts/${id}`} key={id}>
        <article className="container card p-3 mb-4">
          <h2 className="fs-5 fw-bold text-capitalize card-title">{title}</h2>
          <p className="fs-6">{body}</p>
        </article>
      </Link>
    );
  });
  return <>{renderList}</>;
}
