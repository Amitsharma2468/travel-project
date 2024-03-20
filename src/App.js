import React from 'react';
import './App.css';
import BotImage from './dotor1.jpg'; // Import the bot image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <span className="lightning-text">PULSE GEN</span>
        </div>
        <div className="container">
          <div className="left-container">
            <img src={BotImage} alt="Bot" className="bot-image" />
          </div>
          <div className="right-container">
            <h1>
              <span className="hello-text">HELLO,</span><span className="ai-text"> I AM your Doctor AI assistant.</span>
            </h1>
            <h2><span className="about-text">I am dedicated to empowering you with knowledge and tools
             you need to take control of your health and well-being.</span></h2>
             <button className="start-button">LET'S START</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;