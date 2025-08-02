import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the React Router Demo! Feel free to update things</h1>
      <p>This application demonstrates client-side routing using the JSONPlaceholder API.</p>
      <p>Navigate using the links above or start here:</p>
      <ul>
        <li><Link to="/users">View All Users</Link></li>
        <li><Link to="/posts">View All Posts</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
