import React from 'react';
import '../../App.scss';

function Header() {
  return (
    <header className="App-header">
      <div className="main-header"><span>The Clothes Shop</span></div>
      <div className="menu">
        <div className="topnav" id="myTopnav">
          <a href="#male" className="active">Male</a>
          <a href="#female" >Female</a>
          <a href="#kids" >Kids</a>
          <a href="#sale">Sale</a>
          <a href="#soon">Coming soon</a>
        </div>
      </div>
    </header>
  );
}

export default Header;