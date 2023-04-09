import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { UserContext } from '../App';
import logo from '../images/MERN.png';
const Navbar = () => {
  const {state,dispatch}=useContext(UserContext);
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg bg-light">

        <div className="container-fluid">
          <NavLink className="navbar-brand mx-3" to="/"><img src={logo} alt="logo" /></NavLink>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mx-4">
              <li className="nav-item">
                <NavLink className="nav-link active mx-2" aria-current="page" to="/" end>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/aboutpg">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/contact">Contact</NavLink>
              </li>
              {!state && <><li className="nav-item">
                <NavLink className="nav-link mx-2" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/signup">Registration</NavLink>
              </li></>}
              {state && <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/logout">Logout</NavLink>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper=styled.div`
box-shadow: rgba(17, 17, 26, 0.1) 0px 3px 0px;
  img{
    width: 118px;
  }
  li{
    font-size: 20px;
  }
`;

export default Navbar;
