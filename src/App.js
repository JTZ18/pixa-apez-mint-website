import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import MintPage from './components/MintPage';
import Footer from './components/Footer'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <MintPage />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //align-items: center;

`
