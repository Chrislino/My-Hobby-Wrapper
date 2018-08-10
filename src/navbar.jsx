import React from 'react';
import navbar from './navbar.jsx';


class navbar extends components {
    render(){
        return( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Hobby Wrapper</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>)
    }
}

export default navbar;