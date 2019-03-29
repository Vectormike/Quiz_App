import React from 'react';

const Navbar = () => {
  
    return (
      
<nav className="mb-1 navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="a">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="a">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="a">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="a">Pricing</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item avatar">
        <a className="nav-link p-0" href="a">
          <img src={`https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg`} className="rounded-circle z-depth-0" alt="" height="35"/>
        </a>
      </li>
    </ul>
  </div>
</nav>
      
    );
  }

  export default Navbar;