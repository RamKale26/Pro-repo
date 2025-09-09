// import React, { useEffect, useState } from "react";

// function Admin() {
//   // Sample data - aap apne API se fetch kar sakte hain
//   const [users, setUsers] = useState([]);
//   const [products, setProducts] = useState([]);

//   // Form state for adding/editing product
//   const [productForm, setProductForm] = useState({
//     id: null,
//     name: "",
//     price: "",
//     category: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   // Simulate fetching data on mount
//   useEffect(() => {
//     // Replace with API calls
//     setUsers([
//       { id: 1, name: "John Doe", email: "john@example.com", role: "user" },
//       { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin" },
//     ]);

//     setProducts([
//       { id: 1, name: "T-Shirt", price: 499, category: "Men" },
//       { id: 2, name: "Lipstick", price: 299, category: "Beauty" },
//     ]);
//   }, []);

//   // User delete handler
//   const handleDeleteUser  = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       setUsers(users.filter((user) => user.id !== id));
//       // TODO: call API to delete user
//     }
//   };

//   // Product handlers
//   const handleDeleteProduct = (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       setProducts(products.filter((product) => product.id !== id));
//       // TODO: call API to delete product
//     }
//   };

//   const handleEditProduct = (product) => {
//     setProductForm(product);
//     setIsEditing(true);
//   };

//   const handleProductFormChange = (e) => {
//     const { name, value } = e.target;
//     setProductForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleProductFormSubmit = (e) => {
//     e.preventDefault();
//     if (!productForm.name || !productForm.price || !productForm.category) {
//       alert("Please fill all product fields");
//       return;
//     }

//     if (isEditing) {
//       // Update product
//       setProducts((prev) =>
//         prev.map((p) => (p.id === productForm.id ? productForm : p))
//       );
//       // TODO: call API to update product
//     } else {
//       // Add new product
//       const newProduct = {
//         ...productForm,
//         id: Date.now(), // simple id generation
//         price: Number(productForm.price),
//       };
//       setProducts((prev) => [...prev, newProduct]);
//       // TODO: call API to add product
//     }

//     setProductForm({ id: null, name: "", price: "", category: "" });
//     setIsEditing(false);
//   };

//   const handleCancelEdit = () => {
//     setProductForm({ id: null, name: "", price: "", category: "" });
//     setIsEditing(false);
//   };

//   return (
//     <div className="container my-4">
//       <h1 className="mb-4">Admin Dashboard</h1>

//       {/* User Management */}
//       <section className="mb-5">
//         <h2>User Management</h2>
//         {users.length === 0 ? (
//           <p>No users found.</p>
//         ) : (
//           <table className="table table-bordered">
//             <thead className="table-light">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(({ id, name, email, role }) => (
//                 <tr key={id}>
//                   <td>{id}</td>
//                   <td>{name}</td>
//                   <td>{email}</td>
//                   <td>{role}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDeleteUser (id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </section>

//       {/* Product Management */}
//       <section>
//         <h2>Product Management</h2>

//         <form onSubmit={handleProductFormSubmit} className="mb-4">
//           <div className="row g-3 align-items-center">
//             <div className="col-md-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Product Name"
//                 className="form-control"
//                 value={productForm.name}
//                 onChange={handleProductFormChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="price"
//                 placeholder="Price"
//                 className="form-control"
//                 value={productForm.price}
//                 onChange={handleProductFormChange}
//                 min="0"
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="text"
//                 name="category"
//                 placeholder="Category"
//                 className="form-control"
//                 value={productForm.category}
//                 onChange={handleProductFormChange}
//               />
//             </div>
//             <div className="col-md-2 d-flex gap-2">
//               <button type="submit" className="btn btn-primary">
//                 {isEditing ? "Update" : "Add"}
//               </button>
//               {isEditing && (
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={handleCancelEdit}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </div>
//         </form>

//         {products.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           <table className="table table-bordered">
//             <thead className="table-light">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Price (₹)</th>
//                 <th>Category</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map(({ id, name, price, category }) => (
//                 <tr key={id}>
//                   <td>{id}</td>
//                   <td>{name}</td>
//                   <td>{price}</td>
//                   <td>{category}</td>
//                   <td>
//                     <button
//                       className="btn btn-warning btn-sm me-2"
//                       onClick={() => handleEditProduct({ id, name, price, category })}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDeleteProduct(id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Admin;


import React, { useEffect, useState } from "react";
import Prodservice from "../Services/Prodservice";

function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [categoryLabelById, setCategoryLabelById] = useState({});

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError("");

    const loadUsers = () => {
      // Try token-protected first, then fallback to public table API
      return Prodservice.getUsers()
        .then((data) => data)
        .catch(() => Prodservice.getUsersbytable().then((res) => res?.data ?? res));
    };

    Promise.allSettled([
      loadUsers(),
      Prodservice.getProducts().then((res) => res?.data ?? res),
      Prodservice.getAllCategories().then((res) => res?.data ?? res),
    ])
      .then((results) => {
        if (!isMounted) return;
        const [usersRes, productsRes, categoriesRes] = results;

        const toArray = (val) => {
          if (Array.isArray(val)) return val;
          if (val && Array.isArray(val.data)) return val.data;
          if (val && Array.isArray(val.users)) return val.users;
          if (val && val.data && Array.isArray(val.data.users)) return val.data.users;
          if (val && Array.isArray(val.products)) return val.products;
          if (val && val.data && Array.isArray(val.data.products)) return val.data.products;
          if (val && Array.isArray(val.items)) return val.items;
          if (val && val.data && Array.isArray(val.data.items)) return val.data.items;
          if (val && Array.isArray(val.records)) return val.records;
          if (val && val.data && Array.isArray(val.data.records)) return val.data.records;
          return [];
        };

        const getCount = (raw, arr) => {
          if (arr.length) return arr.length;
          if (raw && typeof raw.count === 'number') return raw.count;
          if (raw && typeof raw.total === 'number') return raw.total;
          if (raw && raw.data && typeof raw.data.count === 'number') return raw.data.count;
          if (raw && raw.data && typeof raw.data.total === 'number') return raw.data.total;
          return 0;
        };

        if (usersRes.status === 'fulfilled') {
          const usersRaw = usersRes.value;
          const usersArr = toArray(usersRaw);
          setUserCount(getCount(usersRaw, usersArr));
          setRecentUsers(usersArr);
        }
        if (productsRes.status === 'fulfilled') {
          const productsRaw = productsRes.value;
          const productsArr = toArray(productsRaw);
          setProductCount(getCount(productsRaw, productsArr));
          setRecentProducts(productsArr);
        }
        if (categoriesRes.status === 'fulfilled') {
          const categoriesRaw = categoriesRes.value;
          const categoriesArr = toArray(categoriesRaw);
          // Prefer explicit numeric count from API if available, else unique names length
          const apiCount = (categoriesRaw && typeof categoriesRaw.count === 'number') ? categoriesRaw.count : null;
          if (apiCount != null) setCategoryCount(apiCount);
          else {
            // Some APIs may include duplicates; count unique by id/name
            const ids = new Set();
            const names = new Set();
            categoriesArr.forEach((c) => {
              const id = c?.id ?? c?.Id ?? c?.category_id;
              const nm = (c?.Name ?? c?.name ?? "").toString().trim().toLowerCase();
              if (id != null) ids.add(id);
              if (nm) names.add(nm);
            });
            const dedupCount = ids.size || names.size || categoriesArr.length;
            setCategoryCount(dedupCount);
          }
          // Build quick lookup for category labels
          const map = {};
          categoriesArr.forEach((c) => {
            const id = c?.id ?? c?.category_id ?? c?.CategoryId;
            const label = c?.name ?? c?.category_name ?? c?.CategoryName ?? c?.label;
            if (id != null) map[id] = label || String(id);
          });
          setCategoryLabelById(map);
        }
        // Fallback: if categories failed or returned none, derive count from products
        const productsOk = productsRes.status === 'fulfilled';
        const categoriesOk = categoriesRes.status === 'fulfilled';
        if ((!categoriesOk) || (categoriesOk && getCount(categoriesRes.value, toArray(categoriesRes.value)) === 0)) {
          if (productsOk) {
            const productsArr = toArray(productsRes.value);
            const uniqueIds = new Set(productsArr.map((p) => p?.category_id).filter((v) => v != null));
            setCategoryCount(uniqueIds.size);
            // Minimal label map using IDs if names unknown
            const map = {};
            uniqueIds.forEach((id) => { map[id] = String(id); });
            setCategoryLabelById((prev) => Object.keys(prev).length ? prev : map);
          }
        }

        if (usersRes.status === 'rejected' && productsRes.status === 'rejected' && categoriesRes.status === 'rejected') {
          setError("Unable to load counts. Please refresh.");
        } else {
          // Suppress partial failure warning; show no alert when some data loads
          setError("");
        }
      })
      .catch((err) => {
        console.error("Failed to load dashboard counts:", err);
        if (!isMounted) return;
        setError("Unable to load counts. Please refresh.");
      })
      .finally(() => isMounted && setIsLoading(false));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Admin Dashboard</h1>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-uppercase text-muted small">Total Users</div>
                <div className="display-6 fw-bold">
                  {isLoading ? "—" : userCount}
                </div>
              </div>
              <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                <i className="bi bi-people" style={{ fontSize: 28 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-uppercase text-muted small">Total Products</div>
                <div className="display-6 fw-bold">
                  {isLoading ? "—" : productCount}
                </div>
              </div>
              <div className="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                <i className="bi bi-box-seam" style={{ fontSize: 28 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <div className="text-uppercase text-muted small">Categories</div>
                <div className="display-6 fw-bold">
                  {isLoading ? "—" : categoryCount}
                </div>
              </div>
              <div className="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                <i className="bi bi-tags" style={{ fontSize: 28 }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details hidden on dashboard: not showing full product list */}
    </div>
  );
}

export default Admin;