import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MenPage from "./components/MenPage";
import Product from "./components/Product"; 
import WomenPage from "./components/WomenPage";
import Kids from "./components/Kids";
import BeautyPage from "./components/BeautyPage";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import AboutUs from "./components/AboutUs";
import Grocery from "./components/Grocery";
import AdminLogin from "./components/AdminLogin";
import AddCategory from "./components/AddCategory";
import AdminDash from "./components/AdminDash";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />


          <Route path="/adminpage" element={<AdminDash/>} />

        
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/groery" element={<Grocery />} /> 
          <Route path="/login" element={<LoginPage />} />

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/reg" element={<RegisterForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/addcat" element={<AddCategory />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
