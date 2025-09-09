// let CategoryModel= require("../models/CategoryModel");


// exports.Addcategory=(req,res)=>{
//     let{category_name}=(req.body);
//     CategoryModel.Addcategory(category_name)
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         res.send(err);
//     });
// }

// exports.viewAllCategory=(req,res)=>{
//     let{category_name}=(req.body);
//     CategoryModel.viewAllCategory(category_name)
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         res.send(err);
//     });
// }

// exports.UpdateCategory=(req,res)=>{
//     let{category_name,category_id}=(req.body);
//     CategoryModel.UpdateCategory(category_name,category_id)
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// }

// exports.DeleteCategory=(req,res)=>{
//     let{category_id}=(req.body);
//     CategoryModel.DeleteCategory(category_id)
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// }


let CategoryModel = require("../models/CategoryModel");

// Add Category
exports.Addcategory = (req, res) => {
  const Name = req.body?.Name || req.body?.category_name;
  console.log("Addcategory called with:", Name);

  if (!Name) {
    return res.status(400).json({ error: "category_name is required" });
  }
  CategoryModel.Addcategory(Name)
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("Addcategory error:", err);
      res.status(500).json(err);
    });

};
// View All
exports.viewAllCategory = (req, res) => {
  console.log("viewAllCategory API called");
  CategoryModel.viewAllCategory()
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("viewAllCategory error:", err);
      res.status(500).json(err);
    });
};

// Update
exports.UpdateCategory = (req, res) => {
  const id = req.body?.category_id || req.body?.id;
  const name = req.body?.category_name || req.body?.Name || req.body?.name;
  console.log("UpdateCategory called with:", name, id);

  if (!id) {
    return res.status(400).json({ error: "category_id is required" });
  }

  CategoryModel.UpdateCategory(name, id)
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("UpdateCategory error:", err);
      res.status(500).json(err);
    });
};

// Delete
exports.DeleteCategory = (req, res) => {
  const id = req.body?.category_id || req.body?.id;
  console.log("DeleteCategory called with:", id);

  if (!id) {
    return res.status(400).json({ error: "category_id is required" });
  }

  CategoryModel.DeleteCategory(id)
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("DeleteCategory error:", err);
      res.status(500).json(err);
    });
};



