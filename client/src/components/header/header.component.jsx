
import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => (
  <div className='header'>
    <Link className='logo' to='/'>
      ZTM Challenge App
    </Link>
    <div className='nav-items'>
      <Link to='/challenges' className='nav-item'>
        Challenges
      </Link>
      <Link to='/login' className='nav-item'>
        Login
      </Link>
    </div>
  </div>
);


export default Header;
