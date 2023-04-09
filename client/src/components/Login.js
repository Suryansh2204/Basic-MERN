import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../App";
import loginImg from '../images/login.jpg';

const Login = () => {
  const [user,setUser]=useState({email:"",password:""});
  const navigate=useNavigate();
  const {state,dispatch}=useContext(UserContext);
  const handleInputs=(e)=>{
    setUser(
      {
        ...user,
        [e.target.name]:e.target.value
    });
  };

  const loginUser=async (e)=>{
    e.preventDefault();
    const {email,password}=user;
    const res= await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });
    const data= await res;
    if(res.status===400|| !data){
      window.alert("Invalid Credentials");
    }else{
      dispatch({type:"USER",payload:true})
      window.alert("Login Successful");
      navigate('/');
    }
  };

  return (
    <div className="container">
      <RegCard className="container-fluid">
        <Wrapper className="container-fluid">
          <ImgPart className="container-fluid">
            <img src={loginImg} alt="reg img" />
            <NavLink className="alReg" to="/signup">
              Not Registered ? Sign Up.
            </NavLink>
          </ImgPart>
          <form method="POST" className=" container m-5">
            <h3>Login</h3>

            <FormGroup className="container-fluid">
              <label htmlFor="email">
                <i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                autoComplete="off"
                vlaue={user.email}
                onChange={handleInputs}
              />
            </FormGroup>

            <FormGroup className="container-fluid">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                vlaue={user.password}
                onChange={handleInputs}
              />
            </FormGroup>
            <input type="submit" value="Login" name="submit" onClick={loginUser} />
          </form>
        </Wrapper>
      </RegCard>
    </div>
  );
};

const RegCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: auto;
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
  }
  input[type="submit"] {
    background-color: #04aa6d;
    border: none;
    color: white;
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
      background-color: #038b59;
    }
  }
`;

const FormGroup = styled.div`
  margin: 1rem;

  input {
    border: none;
    border-bottom: 2px solid grey;
    outline: none;
    margin-left: 15px;

    ::placeholder {
      padding-left: 5px;
    }
  }
  i {
    margin-right: 5px;
  }
`;

const ImgPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  img {
    width: 400px;
    margin: 10px 30px 10px 0px;
  }
  .alReg {
    text-decoration: none;
    color: black;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export default Login;
