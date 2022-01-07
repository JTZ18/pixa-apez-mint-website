import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import MintPage from './components/MintPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MintPage />
    </div>
  );
}

export default App;
