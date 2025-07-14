import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!mobile || !password) {
      return setError('Both fields are required');
    }

    setError('');
    await onLogin({ mobile, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-center mb-4">Login to Cura Pet</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={mobile}
        onChange={e => setMobile(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
