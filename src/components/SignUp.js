// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
      <div className="main">
            <h2 className="main-header">SignUp If New User to the Application!!!</h2>
      <form onSubmit={handleSubmit} className="create-form">
            <label>Email Id </label><br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br></br>
        
            <label>Password </label><br></br>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br></br>
        <br></br>
        <button type='submit'>Login</button>
       </form>
    </div>
  );
}

export default SignUp;
