import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="main">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and update. </p>
      <div className="inputbox">
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <input placeholder="Email" />
      </div>
      <button>Subscribe</button>
    </div>
  );
}
