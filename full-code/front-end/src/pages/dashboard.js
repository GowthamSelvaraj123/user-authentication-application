import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('authTokenExpiry');
      navigate('/');
    };
  
    return (
        <div class="dashboard-section">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <button className="btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;