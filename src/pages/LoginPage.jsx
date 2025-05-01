import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in as:", username);
    navigate('/main-form');
  };

  return (
    <div className="loginpage-container">
      

      {!role && (
        <div className="loginpage-role-selection">
          <h3>Are you an Admin or Other?</h3>
          <button onClick={() => setRole('admin')}>Admin</button>
          <button onClick={() => setRole('other')}>Other</button>
        </div>
      )}

      {role === 'admin' && (
        <form onSubmit={handleLogin} className="loginpage-form">
          <h2>Login Page</h2>
          <div className="loginpage-input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="loginpage-input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}

      {role === 'other' && (
        <div className="loginpage-other-selection">
          <p>You have selected Other. You may have limited access.</p>
          <button onClick={() => setRole('')}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
