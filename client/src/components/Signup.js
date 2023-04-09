import React from "react";
import styled from "styled-components";
import signUpImg from "../images/signup.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const navigate=useNavigate();  
  const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});
  
  const handleInputs=(e)=>{
    setUser(
      {
        ...user,
        [e.target.name]:e.target.value
    });
  };

  const postData= async (e)=>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword}=user;
    const res= await fetch('/register',{
      method:"POST",
      // mode:'cors',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
    const data=await res.json();
    if(res.status===422 || !data){
      console.log("Invalid");
      window.alert("Invalid Request");
    }
    else{
      window.alert("Successfully registered");
      navigate("/login");
    }
  };

  return (
    <div className="container-fluid">
      <RegCard>
        <Wrapper className="container-fluid">
          <form method="POST" className="m-5">
            <h3>Sign Up</h3>
            <FormGroup className="container-fluid">
              <label htmlFor="name">
                <i className="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                autoComplete="off"
                vlaue={user.name}
                onChange={handleInputs}
              />
            </FormGroup>

            <FormGroup className="container">
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

            <FormGroup className="container">
              <label htmlFor="phone">
                <i className="fa-solid fa-phone"></i>
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your phone number"
                autoComplete="off"
                vlaue={user.phone}
                onChange={handleInputs}
              />
            </FormGroup>

            <FormGroup className="container">
              <label htmlFor="work">
                <i className="fa-solid fa-briefcase"></i>
              </label>
              <input
                type="text"
                name="work"
                id="work"
                placeholder="Your Profession"
                autoComplete="off"
                vlaue={user.work}
                onChange={handleInputs}
              />
            </FormGroup>

            <FormGroup className="container">
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

            <FormGroup className="container">
              <label htmlFor="cpassword">
                <i className="fa-solid fa-lock"></i>
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm password"
                autoComplete="off"
                vlaue={user.cpassword}
                onChange={handleInputs}
              />
            </FormGroup>
            <input
              type="submit"
              value="Sign up"
              name="submit"
              onClick={postData}
            />
          </form>

          <ImgPart className="container-fluid">
            <img src={signUpImg} alt="reg img" />
            <NavLink className="alReg" to="/login">
              Already Registered ?
            </NavLink>
          </ImgPart>
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: auto;
  border-radius: 10px;
  form{
    display: flex;
    flex-direction: column;
  }
  input[type=submit] {
    background-color: #04aa6d;
    border: none;
    color: white;
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 8px;

    &:hover{
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
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
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

export default Signup;
