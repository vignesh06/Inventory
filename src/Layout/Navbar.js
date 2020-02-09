import React, { useState, useEffect } from 'react';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import {UrlConstant,localstorageConstants} from '../Constants/Constants';
import history from '../App.js';
const Navbar = props => {
  const logout=()=>{
      localStorage.setItem(
        localstorageConstants.Token,
       ""
      )
      props.history.push("/login")
  }
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a className='navbar-brand'>
         Inventory
        </a>
        
        <ul className='navbar-nav'>
        <li className='nav-item'>
            <Link className='nav-link' to='/admin/dashboard'>
             Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/users'>
              Users
            </Link>
          </li>
           <li className='nav-item'>
            <Link className='nav-link' to='/admin/products'>
               Products
            </Link>
          </li>
          {/* <li className='nav-item'>
            <Link className='nav-link' to='/admin/createproduct'>
              Create Product
            </Link>
          </li> */}
          {/* <li className='nav-item'>
            <Link className='nav-link' to='/news'>
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/news/breaking-news'>
              Breaking News
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/news/national-news'>
              National News
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='news/world-news'>
              World News
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/home'>
              Home Alias
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/travel/2020/01/26'>
              Travel with Params
            </Link>
          </li> */}
        </ul>
        <a style={{"float":"right","color": "rgba(255,255,255,.5)"}} onClick={logout} >
         Logout
        </a>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(Navbar);
