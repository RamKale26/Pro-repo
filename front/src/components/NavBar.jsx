// import React, { useEffect, useState } from "react";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "../style/Navbar.css";

// function NavBar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [user, setUser] = useState(null);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const updateUser = () => {
//       const storedUser = localStorage.getItem("user");
//       setUser(storedUser ? JSON.parse(storedUser) : null);
//     };

//     updateUser();
//     window.addEventListener("userChanged", updateUser);

//     return () => {
//       window.removeEventListener("userChanged", updateUser);
//     };
//   }, []);

//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);

//     window.dispatchEvent(new Event("userChanged"));

//     // ✅ Show toast instead of alert
//     toast.success("Logout Successfully....", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//     navigate("/");
//   };
  

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (search.trim()) {
//       navigate(`/search?query=${search}`);
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
//         <Link className="navbar-brand me-4 d-flex align-items-center" to="/">
//           <img
//             src="https://t3.ftcdn.net/jpg/12/57/05/84/240_F_1257058412_n1kFO0OTGTwXe1vP4Fh7w7wKNSOL6CKF.jpg"
//             alt="QuikCart Logo"
//             style={{ height: "60px", marginRight: "5px", width: "100px" }}
//           />
//           <h2 style={{ color: "red", margin: 0 }}>
//             Quik<span style={{ color: "black" }}>Cart</span>
//           </h2>
//         </Link>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item mx-2">
//               <NavLink className="nav-link fw-bold text-dark" to="/men">MEN</NavLink>
//             </li>
//             <li className="nav-item mx-2">
//               <NavLink className="nav-link fw-bold text-dark" to="/women">WOMEN</NavLink>
//             </li>
//             <li className="nav-item mx-2">
//               <NavLink className="nav-link fw-bold text-dark" to="/electronic">ELECTRONICS</NavLink>
//             </li>
//             <li className="nav-item mx-2">
//               <NavLink className="nav-link fw-bold text-dark" to="/beauty">BEAUTY</NavLink>
//             </li>
//             <li className="nav-item mx-2">
//               <NavLink className="nav-link fw-bold text-dark" to="/grocery">GROCERY</NavLink>
//             </li>
//           </ul>

//           <form className="d-flex me-4" onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="form-control me-2"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <button type="submit" className="btn btn-danger">Search</button>
//           </form>

//           <div className="d-flex gap-4 position-relative mt-3 mt-lg-0">
//             <div className="text-center" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
//               <FaUser className="icon-size mb-1" />
//               <div className="icon-label">Profile</div>

//               {showDropdown && (
//                 <div
//                   className="dropdown-menu show position-absolute"
//                   style={{ top: "100%", right: 0, zIndex: 999, minWidth: "150px" }}
//                 >
//                   {user ? (
//                     <>
//                       <Link className="dropdown-item" to="/userdash">Dashboard</Link>
//                       <button className="dropdown-item" onClick={handleLogout}>Logout</button>
//                     </>
//                   ) : (
//                     <>
//                       <Link className="dropdown-item" to="/adminlogin">Admin Login</Link>
//                       <Link className="dropdown-item" to="/login">User Login</Link>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="text-center">
//               <FaHeart className="icon-size mb-1" />
//               <div className="icon-label">
//                 <Link className="dropdown-item" to="/wishlist">Wishlist</Link>
//               </div>
//             </div>

//             <div className="text-center">
//               <FaShoppingCart className="icon-size" />
//               <div className="icon-label">
//                 <Link className="dropdown-item" to="/cart">Cart</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Toast Container */}
//       <ToastContainer />
//     </>
//   );
// }

// export default NavBar;

import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaUser , FaHeart, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../style/Navbar.css";

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser ] = useState(null);
  const [search, setSearch] = useState("");
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser  = () => {
      const storedUser  = localStorage.getItem("user");
      setUser (storedUser  ? JSON.parse(storedUser ) : null);
    };

    updateUser ();
    window.addEventListener("userChanged", updateUser );

    return () => {
      window.removeEventListener("userChanged", updateUser );
    };
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser (null);

    window.dispatchEvent(new Event("userChanged"));

    toast.success("Logout Successfully....", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${search}`);
      setNavbarCollapsed(true); // close navbar on search submit (mobile)
    }
  };

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown") && !event.target.closest(".profile-icon")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
        <Link className="navbar-brand me-4 d-flex align-items-center" to="/">
          <img
            src="https://t3.ftcdn.net/jpg/12/57/05/84/240_F_1257058412_n1kFO0OTGTwXe1vP4Fh7w7wKNSOL6CKF.jpg"
            alt="QuikCart Logo"
            style={{ height: "60px", marginRight: "5px", width: "100px" }}
          />
          <h2 style={{ color: "red", margin: 0 }}>
            Quik<span style={{ color: "black" }}>Cart</span>
          </h2>
        </Link>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarContent"
          aria-expanded={!navbarCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarCollapsed ? "" : "show"}`} id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className="nav-link fw-bold text-dark" to="/men" onClick={() => setNavbarCollapsed(true)}>MEN</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link fw-bold text-dark" to="/women" onClick={() => setNavbarCollapsed(true)}>WOMEN</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link fw-bold text-dark" to="/electronic" onClick={() => setNavbarCollapsed(true)}>ELECTRONICS</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link fw-bold text-dark" to="/beauty" onClick={() => setNavbarCollapsed(true)}>BEAUTY</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link fw-bold text-dark" to="/groery" onClick={() => setNavbarCollapsed(true)}>GROCERY</NavLink>
            </li>
          </ul>

          <form className="d-flex me-4 my-3 my-lg-0" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              className="form-control me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-danger">Search</button>
          </form>

          <div className="d-flex gap-4 position-relative mt-3 mt-lg-0 align-items-center">
            <div
              className="text-center profile-icon"
              onClick={toggleDropdown}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <FaUser  className="icon-size mb-1" />
              <div className="icon-label">Profile</div>

              {showDropdown && (
                <div
                  className="dropdown-menu show position-absolute profile-dropdown"
                  style={{ top: "100%", right: 0, zIndex: 999, minWidth: "150px" }}
                >
                  {user ? (
                    <>
                      <Link className="dropdown-item" to="/userdash" onClick={() => setShowDropdown(false)}>Dashboard</Link>
                      <button className="dropdown-item" onClick={() => { handleLogout(); setShowDropdown(false); }}>Logout</button>
                    </>
                  ) : (
                    <>
                      <Link className="dropdown-item" to="/adminlogin" onClick={() => setShowDropdown(false)}>Admin Login</Link>
                      <Link className="dropdown-item" to="/login" onClick={() => setShowDropdown(false)}>User  Login</Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="text-center">
              <FaHeart className="icon-size mb-1" />
              <div className="icon-label">
                <Link className="dropdown-item" to="/wishlist" onClick={() => setNavbarCollapsed(true)}>Wishlist</Link>
              </div>
            </div>

            <div className="text-center">
              <FaShoppingCart className="icon-size" />
              <div className="icon-label">
                <Link className="dropdown-item" to="/cart" onClick={() => setNavbarCollapsed(true)}>Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default NavBar;


