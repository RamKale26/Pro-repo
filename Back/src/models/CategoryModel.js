let db=require("../../db.js");

exports.Addcategory=(category_name)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into categories (category_name) values(?)",[category_name],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Category Add Successfully"+result)
            }
        })
    })
}

exports.viewAllCategory=(category_name)=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from categories",(err,result)=>{
          if(err){ 
             reject(err)
            }
        else{
            resolve(result);
        }
        })
    })
}
exports.UpdateCategory=(category_name,category_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("update categories set category_name=? where category_id=? ",[category_name,category_id],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    });
}

//delete category  by category id
exports.DeleteCategory=(category_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from categories where category_id=?",[category_id],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}