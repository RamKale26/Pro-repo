let db = require("../../db.js");

exports.Addcategory = (Name) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO categories (Name) VALUES(?)", [Name], (err, result) => {
            if (err) reject(err);
            else resolve("Category Added Successfully");
        });
    });
};
// view all products

exports.viewAllCategory = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM categories", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.UpdateCategory = (Name, id) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE categories SET Name=? WHERE id=?", [Name, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.DeleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM categories WHERE id=?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};
