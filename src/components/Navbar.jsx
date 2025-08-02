import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = { display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#f0f0f0' };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/users">All Users</Link>
      <Link to="/posts">All Posts</Link>
    </nav>
  );
}

export default Navbar;
