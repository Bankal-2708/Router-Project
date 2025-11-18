import React from "react";
import {  Route, Routes } from "react-router-dom";

import MainHeader from "./Components/Header/MainHeader";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import  Contact  from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github from "./Components/Github/Github";
import Login from "./Components/Log In/Login";


function App() {
  return (
    
      <div>
        <MainHeader />
        <Routes>
          
          {/* <Route
            path="/"
            element={<h1 className="p-6 text-3xl font-bold">{<Home/>}</h1>}
          /> */}

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element= {<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/github" element={<Github/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/user/:id" element={<User/>}/> */}

        </Routes>
        <Footer/>
      </div>
    
  );
}

export default App;
