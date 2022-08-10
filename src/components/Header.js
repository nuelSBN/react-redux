import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center container container-fluid">
      <h1>
        <Link to="/">
          nuel<span>sbn</span>
        </Link>
      </h1>
      <ul className="nav">
        <li>
          <Link to="/addPost">Add Post</Link>
        </li>
      </ul>
    </header>
  );
}
