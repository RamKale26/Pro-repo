  // import React, { Component } from "react";
  // import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  // import "animate.css"; 

  // import NavBar from "./components/NavBar";
  // import MenPage from "./components/MenPage";
  // import Product from "./components/Product"; 
  // import WomenPage from "./components/WomenPage";
  // import Electronics from "./components/Electronics";
  // import BeautyPage from "./components/BeautyPage";
  // import LoginPage from "./components/LoginPage";
  // import RegisterForm from "./components/RegisterForm";
  // import AboutUs from "./components/AboutUs";
  // import Grocery from "./components/Grocery";
  // import AdminLogin from "./components/AdminLogin";
  // import AddCategory from "./components/AddCategory";
  // import AdminDash from "./components/AdminDash";
  // import ProductDetail from "./components/ProductDetail";
  // import UserDashboard from "./components/UserDashboard"
  // import Offer from "./components/Offer"
  // import Scrolltop from "./components/Scrolltop";
  // import Cart from "./components/Cart";
  // import Checkout from "./components/Checkout";
 
 

  // // import Wishlist from "./components/WishList";




  // function AppWrapper() {
  //   const location = useLocation();
  //   const hideNavbarRoutes = ["/adminpage","/userdash"];
  //   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  //   return (
  //     <>
  //       {!shouldHideNavbar && <NavBar />}
  //       <Scrolltop />
  //       <Routes>
  //         <Route path="/" element={<Product />} />
  //         <Route path="/adminpage" element={<AdminDash />} />
  //         <Route path="/men" element={<MenPage />} />
  //         <Route path="/women" element={<WomenPage />} />
  //         <Route path="/electronic" element={<Electronics />} />
  //         <Route path="/beauty" element={<BeautyPage />} />
  //         <Route path="/groery" element={<Grocery />} /> 
  //         <Route path="/login" element={<LoginPage />} />
  //         <Route path="/adminlogin" element={<AdminLogin />} />
  //         <Route path="/reg" element={<RegisterForm />} />
  //         <Route path="/about" element={<AboutUs />} />
  //         <Route path="/addcat" element={<AddCategory />} />
  //         <Route path="/product/:id" element={<ProductDetail />} />

  //         {/* <Route path="/wishlist" element={<Wishlist />} /> */}

  //         <Route path="/userdash" element={<UserDashboard/>} />
  //         <Route path="/offer" element={<Offer/>} />
  //         <Route path="/cart" element={<Cart/>} />
  //          <Route path="/checkout" element={<Checkout/>} />

           




              
  //       </Routes>
  //     </>
  //   );
  // }
  // class App extends Component {
  //   render() {
  //     return (
  //       <BrowserRouter>
  //         <AppWrapper />
  //       </BrowserRouter>
  //     );
  //   }
  // }

  // export default App;

import React, { Component } from "react";
  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  import "animate.css"; 

  import NavBar from "./components/NavBar";
  import MenPage from "./components/MenPage";
  import Product from "./components/Product"; 
  import WomenPage from "./components/WomenPage";
  import Electronics from "./components/Electronics";
  import BeautyPage from "./components/BeautyPage";
  import LoginPage from "./components/LoginPage";
  import RegisterForm from "./components/RegisterForm";
  import AboutUs from "./components/AboutUs";
  import Grocery from "./components/Grocery";
  import AdminLogin from "./components/AdminLogin";
  import AddCategory from "./components/AddCategory";
  import AdminDash from "./components/AdminDash";
  import ProductDetail from "./components/ProductDetail";
  import UserDashboard from "./components/UserDashboard"
  import Offer from "./components/Offer"
  import Scrolltop from "./components/Scrolltop";
  import Cart from "./components/Cart";
  import Checkout from "./components/Checkout";
  import ProductUpdate from "./ADDMIN/ProductUpdate";
 
 

  // import Wishlist from "./components/WishList";




  function AppWrapper() {
    const location = useLocation();
    const hideNavbarRoutes = ["/adminpage","/userdash"];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname) || location.pathname.startsWith("/admin/products/");
    return (
      <>
        {!shouldHideNavbar && <NavBar />}
        <Scrolltop />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/adminpage" element={<AdminDash />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/electronic" element={<Electronics />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/groery" element={<Grocery />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/reg" element={<RegisterForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/addcat" element={<AddCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* <Route path="/wishlist" element={<Wishlist />} /> */}

          <Route path="/userdash" element={<UserDashboard/>} />
          <Route path="/offer" element={<Offer/>} />
          <Route path="/cart" element={<Cart/>} />
           <Route path="/checkout" element={<Checkout/>} />

          <Route path="/admin/products/:id/edit" element={<ProductUpdate />} />

           




              
        </Routes>
      </>
    );
  }
  class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <AppWrapper />
        </BrowserRouter>
      );
    }
  }

  export default App;