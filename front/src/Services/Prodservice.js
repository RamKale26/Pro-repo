import axios from "axios";


class Prodservice {
  addUsers(proddata) {
    return axios.post("http://localhost:3000/AddUser", proddata);
  };

  
//admin login
  adminLogin(email, password) {
    return axios.post("http://localhost:3000/loginadmin", {
      Email: email,
      password: password
    });
  };

  //login user by email pass
 userLogin(email, password) {
    return axios.post("http://localhost:3000/userlogin", {
      Email: email,
      password: password,
    });
  };




// view user in all and d postman is correct
getUsersbytable() {
    return axios.get("http://localhost:3000/users");
  }


//delete user
deleteUserById(id) {
  return axios.delete(`http://localhost:3000/users/${id}`);
  }

  updateUser(id, data) {
    const attempts = [
      () => axios.put(`http://localhost:3000/users/${id}`, data),
      () => axios.post(`http://localhost:3000/users/${id}`, data),
      () => axios.post(`http://localhost:3000/updateUser/${id}`, data),
      () => axios.post(`http://localhost:3000/UpdateUser/${id}`, data),
      () => axios.post(`http://localhost:3000/updateUser`, { id, ...data }),
      () => axios.post(`http://localhost:3000/UpdateUser`, { id, ...data }),
    ];
    const tryNext = (i) => attempts[i]().catch((err) => {
      if (i < attempts.length - 1) return tryNext(i + 1);
      throw err;
    });
    return tryNext(0);
  }

  // Preferred explicit endpoints (implement these in your backend)
  updateUserProfile(profile) { // { id, Name, Email, Date, role }
    return axios.post("http://localhost:3000/users/update-profile", profile);
  }

  changeUserPassword(id, password) { // 6-digit numeric
    return axios.post("http://localhost:3000/users/change-password", { id, password });
  }

  // Needed by UserDashboard bootstrapping
  getAllUsers() {
    return axios.get("http://localhost:3000/users");
  }

 addProduct(prodData) {
    return axios.post("http://localhost:3000/addProd", prodData);
  }


getProductsByCategory(categoryId){
  return axios.get(`http://localhost:3000/products/${categoryId}`);
  };


  getProductById(id) {
    return axios.get(`http://localhost:3000/products/${id}`);
  }
  
//  ViewAllProud
//  getproducts() {
//     return axios.get("http://localhost:3000/ViewAllProud");
//   };

// this axoise work on correct

// getUsers() {
// axios.post("http://localhost:3000/userlogin", { Email, password })
//   .then(res => {
//     if (res.data.user) {
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       alert("Login successful!");
//       window.location.href = "/userdashboard";
//     }
//   })
//   .catch(err => {
//     console.error(err);
//     alert("Invalid credentials");
//   });
// };



//  --------- Add Jwt token  by users    ----
// on login submit
getUsers() {
  const token = localStorage.getItem("token"); 

  return axios.get("http://localhost:3000/users", {
    headers: {
      Authorization: `Bearer ${token}`,  
    }
  })
  .then(res => res.data)
  .catch(err => {
    console.error(err.response?.data || err.message);
    throw err; 
  });
}


  //-----------------  category API --------------------------------
addCategory(categoryData) {
  return axios.post("http://localhost:3000/Addcategory", categoryData);
};


  getAllCategories() {
    const endpoints = [
      "http://localhost:3000/getAllCategory",
      "http://localhost:3000/getAllCategories",
      "http://localhost:3000/categories",
      "http://localhost:3000/CategoryView",
      "http://localhost:3000/category",
    ];
    const tryGet = (idx) => {
      return axios.get(endpoints[idx]).catch((err) => {
        if (idx < endpoints.length - 1) {
          return tryGet(idx + 1);
        }
        throw err;
      });
    };
    return tryGet(0);
  }

  updateCategory(categoryData) {
    return axios.post("http://localhost:3000/UpdateCategory", categoryData);
  }

  deleteCategory(categoryData) {
    return axios.post("http://localhost:3000/DeleteCategory", categoryData);
  }

//==========product fetch by backend=============

 getProducts() {
    return axios.get("http://localhost:3000/productsview");
  }

  deleteProduct(id) {
    return axios.delete(`http://localhost:3000/productsview/${id}`);
  }

  updateProduct(product) {
    return axios.put(`http://localhost:3000/productsview/${product.id}`, product);
  }






//============ All Done AIP      New AIP started date 0f  ====================



//================= Manage Orders =================================

placeOrder(order) {
  return axios.post("http://localhost:3000/place-order", {
    user_id: order.user_id,
    product_id: order.product_id,
    address: order.address,
    payment_method: order.payment_method,
    email: order.email,
  });
}


// ✅ Get all orders of a user
getUserOrders(userId) {
  return axios.get(`http://localhost:3000/user-orders/${userId}`);
}


};



export default new Prodservice();




