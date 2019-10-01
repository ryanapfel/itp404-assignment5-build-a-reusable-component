import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar.js';

function App() {
  const img1 = 'https://scontent-lax3-1.cdninstagram.com/vp/afdb22f0a27669eeac386b128894c334/5E393418/t51.2885-19/s150x150/53551268_393847451163710_712526793709453312_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com';
  const img2 = 'https://scontesfasfdknt-lax3-1.cdninstagram.com/vp/afdb22f0a27669eeac386b128894c334/5E393418/t51.2885-19/s150x150/53551268_393847451163710_712526793709453312_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com';
  return (
    <div className='center'>
    <h1>Avatar Component</h1>
    <p>The avatar component is intended to display avatars for various users or profiles. The avatar component is built to gracefully handle an avatar that isn't given a name or when the image doesn't load or exist. In the future it would ideally handle dynamic sizing and coloring.</p>
    <Avatar name='Allison Apfel' src={img1}></Avatar>
    <Avatar name='Allison Apfel' src={img2}></Avatar>
    <Avatar name='Ryan Apfel' src={img2}></Avatar>
    </div>
  );
}

export default App;
