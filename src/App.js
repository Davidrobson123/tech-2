import React from 'react';
import './App.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/common/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
