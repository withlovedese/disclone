import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>

      {/* Chat */}
      <Chat></Chat>
    </div>
  );
}

export default App;
