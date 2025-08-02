import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchId) {
      navigate(`/users/${searchId}`);
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>All Users</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '16px' }}>
        <input
          type="number"
          placeholder="Search user by ID"
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
          min="1"
        />
        <button type="submit">Go</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link> ({user.username})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersListPage;
