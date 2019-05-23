import React from 'react';
import logo from '../../leighton-logo.png';
import '../../App.scss';

function Header() {
  return (
    <header className="App-header">
      <div className="main-header"><span>The</span><img src={logo} className="App-logo"/><span> Shop</span></div>
      <div className="menu">
        <div className="topnav" id="myTopnav">
          <a className="active">Male</a>
          <a>Female</a>
          <a>Kids</a>
          <a>Sale</a>
          <a>Coming soon</a>
        </div>
      </div>
    </header>
  );
}

export default Header;