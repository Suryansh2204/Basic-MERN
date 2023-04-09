import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Home = () => {

  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  
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
      setUserName( data.name);
      setShow(true);
    } catch (err) {}
  };

  useEffect(() => {
    userContact();
  }, []);

  return( 
  <Wrapper className="d-flex justify-content-center align-items-center flex-column">
    <h3>Welcome</h3>
    <h1 className="mt-2">{userName}</h1>
    <h2 className="mt-2">{show? 'Happy to see you back':'We are the MERN Developers'}</h2>
  </Wrapper>
)};

const Wrapper = styled.div`
    background: linear-gradient(to right, #89bceb 0%, #89bceb 50%, #ffffff 50%, #ffffff 100%);
    height: 95vh;
    h3,h2,h1 {
      text-shadow: 1px 1px #ffffff;
    }
    h1{
      font-weight: bold;
    }
    h3{
      color: blue;
    }
`;

export default Home;
