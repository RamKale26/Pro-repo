let db=require("../../db.js");

exports.AddUser = (Name, Email, password, Date, role) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users (Name, Email, password, Date, role) VALUES (?, ?, ?, ?, ?)",
      [Name, Email, password, Date, role],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: "User Registered Successfully" });
        }
      }
    );
  });
};

//login admin
exports.loginUser = (Email, password) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT Email, password, role FROM users WHERE Email = ? AND password = ? AND role = 'admin'",
            [Email, password],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );
    });
};

//view users
exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};






//delete users
exports.DeleteUser = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE id = ?", [user_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "User Deleted Successfully", affectedRows: result.affectedRows });
      }
    });
  });
};


