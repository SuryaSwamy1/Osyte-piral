import * as React from 'react';
import './App.css';

const App: React.FC = () => {
  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="app-container">
      <div className="login-container">
        <h1>Welcome to Piral App</h1>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default App;
