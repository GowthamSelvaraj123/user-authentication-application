import React, { useState } from 'react';
import userImage from '../assets/login-image.svg';
import Header from '../common/header';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authToken = 'your-temporary-auth-token';
    const expiresIn = 1 * 60 * 60 * 1000; // 1 hour
    const expiryTime = new Date().getTime() + expiresIn;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('authTokenExpiry', expiryTime);

        const data = { username, password };
    
        try {
          const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          const responseData = await response.json();
          if (response.ok) {
            console.log(responseData.message); // Handle success (e.g., redirect or show message)
            navigate('/dashboard'); 
          } else {
            throw new Error(responseData.message || 'Login failed'); // Throw error if response is not ok
          }
        } catch (error) {
          console.error('Login error:', error); // Handle error
          setError(error.message); // Set error message
        }
      };

    return (
        <section className='login-container'>
            <div className="left">
                <img alt="user-authentication" src={userImage}/>
            </div>
            <div className="right">
                <div className="overall-wrap">
                    <div className="header-wrap"><Header title="Login" /></div>
                    <div className="form-wrap">
                        <form onSubmit={handleSubmit}>
                            <div className="form-field-wrap">
                                <label>User Name</label>
                                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} name="username" required />
                            </div>
                            <div className="form-field-wrap">
                                <label>Password</label>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
                            </div>
                            <div className="form-button-wrap">
                                <input type="submit" value="Sign in" />
                                <Link className="register_link" to="/register">Sign up</Link>
                            </div>
                            {error && <p>{error}</p>} {/* Display error message if login fails */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
