import React, { useState, useEffect } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: "Men's T-Shirt", price: 499 },
      { id: 2, name: "Laptop Bag", price: 1200 }
    ]);
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category (₹)</th>
            <th>price</th>
            <th>Description</th>
            <th>Image_url</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.Category}</td>
              <td>price</td>
              <td>description</td>
              <td>Image_url</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(p.id)}>
                  Delete
                </button>
                
              </td>
               <td>
                <button className="btn btn-warning btn-sm" onClick={() => deleteProduct(p.id)}>
                  Update
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
