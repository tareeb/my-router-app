import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import UserProfilePage from './pages/UserProfilePage';
import PostsListPage from './pages/PostsListPage';
import NotFoundPage from './pages/NotFoundPage';
import SinglePostPage from './pages/SinglePostPage';
import PostComments from './pages/PostComments';

import './App.css';

function App() {
  return (
    <div>
      
      <Navbar />

      <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Routes>
          {/* Static Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/posts" element={<PostsListPage />} />

          {/* Dynamic Route for a specific user */}
          <Route path="/users/:userId" element={<UserProfilePage />} />

          {/* Nested route for a single post and its comments */}
          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<PostComments />} />
          </Route>

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>


    </div>
  );
}

export default App;
