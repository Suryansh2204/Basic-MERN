import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import errImg from "../images/404.png";
const Error404 = () => {
  return (
    <Wrapper className="container d-flex align-items-center justify-content-center flex-column">
      <img src={errImg} alt="" />
      <div className="fluid-container d-flex align-items-center flex-column">
        <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
        <p>
          THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD IT'S NAME
          CHANGED OR IS TEMPORARILY UNAVAILABLE
        </p>
      </div>
      <div className="mt-3">
        
          <NavLink to="/"><button role="button">BACK TO HOMEPAGE</button></NavLink>
        
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  img {
    position: absolute;
    z-index: -1;
  }
  button {
    color: white;
    padding: 10px;
    text-decoration: none;
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: #3da5ff;
    &:hover{
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        
      }
  }
`;
export default Error404;
