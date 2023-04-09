import React from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const About = () => {

  const [userData,setUserData]=useState({
    name: "",
    email: "",
    phone: "",
    work: "",
  });

  const navigate=useNavigate();

  const callAboutPg=async ()=>{
    try{
      const response= await fetch('/about',{
        method:"GET",
        headers:{
          // Accept:"application/json",
          "Content-Type":"application/json"
        },
        // credentials:"include"
      });

      const data = await response.json();
      if (!response.status === 200) {
        throw new Error(response.error);
      }
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        work:data.work,
      });
    }catch(err){
      console.log("not logged in");
      navigate('/login');
    };
  };

  useEffect(()=>{
    callAboutPg();
  });

  return (
    <div className="container-fluid">
      {/* {callAboutPg()} */}
      <Card>
        {/* <Wrapper className="container-fluid">
          <form method="GET" className="m-5">
            <FormGroup className="container-fluid">
              <label htmlFor="name">
                <i className="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required={+true}
                vlaue={userData.name}
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
                required={+true}
                vlaue={userData.email}
              />
            </FormGroup>

            <FormGroup className="container">
              <label htmlFor="phone">
                <i className="fa-solid fa-phone"></i>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required={+true}
                vlaue={userData.phone}
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
                required={+true}
                vlaue={userData.work}
                
              />
            </FormGroup>
          </form>
        </Wrapper> */}
        <h1>Model data here</h1>
      </Card>
    </div>
  )
}

const Wrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:80vh
`;
const FormGroup=styled.div`
  margin:30px;
  i{
    margin-right: 20px;
  }
  input{
    border: none;
    border-bottom: 2px solid grey;
  }
`;
const Card=styled.div`
`;

export default About;
