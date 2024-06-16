import React from 'react';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <header className="app-header"></header>
      <Router>

      <Routes>

                    <Route exact path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
                    <Route path="/" element={<Login />} />
                    {/* Add other routes here */}
      </Routes>
      </Router>

    </div>
  );
}

export default App;
