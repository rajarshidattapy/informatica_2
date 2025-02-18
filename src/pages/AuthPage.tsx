import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('ise123'); // Default password
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup, user, logout } = useAuth();
  const navigate = useNavigate();

  // Navigate to /home if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      navigate('/home');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://i.imgur.com/YNj9YFf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Auth Form */}
      <div className="relative z-10 min-h-screen bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">
            {isLogin ? 'Login' : 'Sign Up'} to Informatica
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your username"
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-600 text-white px-4 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password for all pc's of ISE dept"
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-600 text-white px-4 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {/* Show Logout Button only if the user is logged in */}
          {user && (
            <div className="mt-4 text-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
