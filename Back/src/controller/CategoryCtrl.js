let CategoryModel= require("../models/CategoryModel");


exports.Addcategory=(req,res)=>{
    let{category_name}=(req.body);
    CategoryModel.Addcategory(category_name)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    });
}

exports.viewAllCategory=(req,res)=>{
    let{category_name}=(req.body);
    CategoryModel.viewAllCategory(category_name)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    });
}

exports.UpdateCategory=(req,res)=>{
    let{category_name,category_id}=(req.body);
    CategoryModel.UpdateCategory(category_name,category_id)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
}

exports.DeleteCategory=(req,res)=>{
    let{category_id}=(req.body);
    CategoryModel.DeleteCategory(category_id)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
}