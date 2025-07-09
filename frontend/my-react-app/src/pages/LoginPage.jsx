import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) return alert('Enter username and password');

    localStorage.setItem('user', JSON.stringify({ username,role }));

    navigate(role === 'customer' ? '/customer/place-order' : '/owner/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-xs">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        >
          <option value="customer">Customer</option>
          <option value="owner">Shop Owner</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
