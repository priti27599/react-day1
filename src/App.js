import React from 'react';
import './style.css';

export default function App() {
  const skill = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Java',
    'Next.js',
    'Java',
  ];
  return (
    <div className="main">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113"
        alt="profile"
      />

      <h3>Priti Kumari</h3>
      <p>Frontend Developer</p>

      <div>
        <h2>Skills</h2>
        <ul>
          {skill.map((sk) => (
            <li key={sk}>{sk}</li>
          ))}
        </ul>
      </div>
      <p>Joined on 06 dec 2021</p>
    </div>
  );
}
