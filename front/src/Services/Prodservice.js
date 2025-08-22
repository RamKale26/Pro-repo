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

// view user
 getUsers() {
    return axios.get("http://localhost:3000/users");
  };

//delete user
deleteUserById(id) {
  return axios.delete(`http://localhost:3000/users/${id}`);
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

};






export default new Prodservice();


