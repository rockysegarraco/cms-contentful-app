import React, { useState } from 'react';
import { PASSWORD, USERNAME } from '../lib/constants';

function UsernamePasswordDialog({ isOpen, onClose, onAuthenticate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (isError) {
        setIsError(false)
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (isError) {
        setIsError(false)
    }
  };

  const handleSubmit = () => {
    if (username === USERNAME && password === PASSWORD) {
        onAuthenticate();
      } else {
        setIsError(true);
      }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {isError && <span className='text-red-500'>Username or Password is wrong</span>}
        <div className="flex justify-end mt-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <button
            className="ml-2 px-4 py-2 border border-gray-300 rounded-sm"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsernamePasswordDialog;
