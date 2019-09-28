import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";

export default function Header(props) {
  return (
    <header className='container'>
      <nav className='navbar'>
        <Link className='nav navbar-brand' to='/'>
          onCode
        </Link>
        <ul className='nav navbar-list'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          {!props.user ? (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                {props.user.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
