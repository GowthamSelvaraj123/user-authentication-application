import userImage from '../assets/login-image.svg';
import Header from '../common/header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          const data = await response.json();
    
          if (data.message === 'Registration successful') {
            navigate('/dashboard');
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error('There was an error!', error);
        }
      };
    
    return(
        <section className='login-container'>
            <div class="left">
                <img alt="user-authentication" src={userImage}/>
            </div>
            <div class="right">

                <div class="overall-wrap">
                    <div class="header-wrap"><Header title="Register"></Header></div>
    <div class="form-wrap">
        <form onSubmit={handleSubmit}>
    <div class="form-field-wrap">
    <label>User Name</label>
    <input type="text" placeholder="Username" name="name" onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div class="form-field-wrap">
    <label>Password</label>
    <input type="password" placeholder="Password" name="name" onChange={(e) => setPassword(e.target.value)}  />
    </div>
  <input type="submit" value="Register" />
</form>
</div>
</div>
            </div>
        </section>
    )
}
export default Register;

