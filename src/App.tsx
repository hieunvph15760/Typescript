import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import login
import Login from './pages/login';
import Table from './pages/students';
function App() {
  return (
    <div className="App">
      {/* Sử dụng login */}
      <Login/>
      <Table/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Thay đổi rồi đó !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
