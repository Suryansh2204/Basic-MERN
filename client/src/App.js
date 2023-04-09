import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { About, Contact, Error404, Home, Login, Logout, Navbar, Signup } from './components';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext=createContext();

const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <BrowserRouter>
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/aboutpg" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      </UserContext.Provider> 
    </BrowserRouter>
  )
}

export default App;

