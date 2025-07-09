import { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [form, setForm] = useState({ username: '', password: '', role: 'customer' });

  const register = async () => {
    if (!form.username || !form.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('User registered. Now you can login.');
      setForm({ username: '', password: '', role: 'customer' });
    } catch (error) {
      alert('Registration failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="customer">Customer</option>
          <option value="owner">Owner</option>
        </select>

        <button
          onClick={register}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
