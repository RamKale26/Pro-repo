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

 };

export default new Prodservice();


