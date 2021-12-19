import React from 'react';
import './App.scss';
import Socket from "./features/socket/Socket.tsx";

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        ms home
      </header>
      <div className="appContent">
        Devices:
        <Socket />
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
