import React from "react";
import Header from "./Components/Header/MainHeader";
import MainHeader from "./Components/Header/MainHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainHeader />
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={<h1 className="p-6 text-3xl font-bold">{<Home/>}</h1>}
          />

          {/* About route */}
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
