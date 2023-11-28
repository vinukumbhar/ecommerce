import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  // Check if user is already logged in
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <NavBar/>
      <h1>Simple E-commerce Website</h1>
      {loggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
          <ProductList/>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
