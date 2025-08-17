let express= require("express");
let controlUser = require("../controller/UserCtrl.js");
let router=express.Router();


router.post("/AddUser", controlUser.AddUser);



//login
router.post("/loginadmin", controlUser.login);

//view users
router.get("/users",controlUser.getUsers);

// router.post("/DeleteUser",controlUser.deleteUser);
router.delete("/users/:id", controlUser.deleteUser);




module.exports = router;
