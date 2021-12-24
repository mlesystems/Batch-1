import React from "react";
import { useState } from 'react';
import axios from 'axios';

const projectID = '6ae581e3-d915-4c62-9c91-fee25114a39d';

const Modal = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 w-100 lead">
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Join Community</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              <div align="center">
                <button type="submit" className="button">
                  <a href="/Apps"><span>Start chatting</span></a>
                </button>
              </div>
            </form>
            <h1>{error}</h1>
          </div>
        </div>

      </div>
    </>
  );


};

export default Modal;