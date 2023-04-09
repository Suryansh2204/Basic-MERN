import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Contact = () => {
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const userContact = async () => {
    try {
      const response = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
      });
    } catch (err) {}
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  const handleClick= async(e)=>{
    e.preventDefault();
    const {name,email,phone,message}=userData;
    const res=await fetch("/contactus",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    });
    const data=await res;
    if(!data)console.log("message not sent");
    else{
      window.alert("data sent ");
      setUserData({...userData,message:""});
    }
  }

  return (
    <Wrapper className="container-fluid mt-5">
      <Tiles className="container-fluid d-flex justify-content-around">
        <Tile className="d-flex p-3">
          <i className="fa-solid fa-mobile"></i>
          <div>
            <p>Phone</p>
            <p>+91 87256652780</p>
          </div>
        </Tile>

        <Tile className="d-flex p-3">
          <i className="fa-solid fa-envelope"></i>
          <div>
            <p>Email</p>
            <p>user.dev1@test.com</p>
          </div>
        </Tile>

        <Tile className="d-flex p-3">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <p>Address</p>
            <p>11/7, J.B. Road, DreamLand.</p>
          </div>
        </Tile>
      </Tiles>

      <Card className="d-flex flex-column mt-5 justify-content-center col-lg-10 offset-lg-1">
        <h3 className="mx-4 mt-4">Get in touch</h3>
        <form method="POST" className="d-flex flex-column justify-content-center">
          <div className="container-fluid d-flex justify-content-center ">
            <input
              type="text"
              name="name"
              onChange={handleInputs}
              value={userData.name}
              placeholder="Your Name"
              required={+true}
              id="contact_form_name"
            />
            <input
              type="email"
              name="email"
              onChange={handleInputs}
              value={userData.email}
              placeholder="Your email"
              required={+true}
              id="contact_form_email"
            />
            <input
              type="number"
              name="phone"
              onChange={handleInputs}
              value={userData.phone}
              placeholder="Your phone"
              required={+true}
              id="contact_form_phone"
            />
          </div>
          <div className=" container-fluid d-flex justify-content-center mt-2 col-lg-10 offset-lg-1">
            <textarea
              id="contact_form_message"
              cols="5"
              rows="5"
              name="message"
              onChange={handleInputs}
              value={userData.message}
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="mx-5 mt-3 mb-4">
            <button type="submit" onClick={handleClick}>Send message</button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Tiles = styled.div``;

const Tile = styled.div`
  width: 16em;
  /* border: 1px solid black; */
  border-radius: 0.5em;
  /* background-color: #f8f9fa; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    margin: 0;
  }
  div {
    margin-left: 1rem;
  }

  display: flex;
  align-items: center;
`;
const Card = styled.div`
  /* border-radius: 15px; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  form {
    input {
      width: 100%;
      margin: 1em;
      height: 2.5em;
      padding-left: 10px;
      border-radius: 5px;
      border: grey 2px solid;
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    textarea {
      width: 100%;
      padding: 10px;
      margin: 1em;
      border-radius: 5px;
      color:blueviolet;
    }
    button {
      width: 150px;
      height: 40px;
      border: none;
      background-color: #b1d7f8;
      border-radius: 8px;
      &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
      }
    }
  }
`;
export default Contact;
