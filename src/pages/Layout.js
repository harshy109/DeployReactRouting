import React from "react";
import {Link, Outlet} from 'react-router-dom';
import './Layout.css';
function Layout (){
    return (
        <>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/home" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/blogs" className="navbar-link">Blogs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    );
}
export default Layout;