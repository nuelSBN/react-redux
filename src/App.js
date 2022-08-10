// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostsListing from './components/PostsLists';
import PostDetails from './components/PostDetails';
import ErrorPage from './components/ErrorPage';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PostsListing />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
