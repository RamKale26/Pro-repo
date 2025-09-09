  // import React, { useEffect, useState } from "react";
  // import UserService from "../Services/Prodservice";

  // function UserDashboard() {
  //   const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [isEditing, setIsEditing] = useState(false);
  //   const [isChangingPass, setIsChangingPass] = useState(false);
  //   const [form, setForm] = useState({ Name: "", Email: "", Date: "", role: "" });
  //   const [passForm, setPassForm] = useState({ password: "", confirm: "" });
  //   const [message, setMessage] = useState("");
  //   const [photoFile, setPhotoFile] = useState(null);

  //   useEffect(() => {
  //     const savedUser = localStorage.getItem("user");

  //     if (savedUser) {
  //       setUser(JSON.parse(savedUser));
  //       setLoading(false);
  //     } else {
  //       const loggedInEmail = localStorage.getItem("userEmail");

  //       if (loggedInEmail) {
  //         UserService.getAllUsers()
  //           .then((res) => {
  //             const foundUser = res.data.find((u) => u.Email === loggedInEmail);
  //             setUser(foundUser || null);
  //             if (foundUser)
  //               setForm({
  //                 Name: foundUser.Name || "",
  //                 Email: foundUser.Email || "",
  //                 Date: foundUser.Date || "",
  //                 role: foundUser.role || "",
  //               });
  //             setLoading(false);
  //           })
  //           .catch((err) => {
  //             console.error(err);
  //             setLoading(false);
  //           });
  //       } else {
  //         setLoading(false);
  //       }
  //     }
  //   }, []);

  //   if (loading) {
  //     return <p className="text-center mt-10">Loading dashboard...</p>;
  //   }

  //   if (!user) {
  //     return (
  //       <p className="text-center mt-10 text-red-500">
  //         No user found. Please login again.
  //       </p>
  //     );
  //   }

  //   return (
  //     <div className="container my-5">
  //       <div className="row justify-content-center">
  //         <div className="col-lg-6">
  //           <div className="card border-0 shadow-sm">
  //             <div className="card-body p-4">
  //               {message && <div className="alert alert-info">{message}</div>}
  //               <div className="d-flex align-items-center mb-3">
  //                 <div
  //                   className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center overflow-hidden"
  //                   style={{ width: 64, height: 64 }}
  //                 >
  //                   {user.photo ? (
  //                     <img
  //                       src={`http://localhost:3000/uploads/${user.photo}`}
  //                       alt="avatar"
  //                       style={{ width: "100%", height: "100%", objectFit: "cover" }}
  //                     />
  //                   ) : (
  //                     <i className="bi bi-person" style={{ fontSize: 28 }}></i>
  //                   )}
  //                 </div>
  //                 <div className="ms-3">
  //                   <h2 className="h4 mb-0">Welcome, {user.Name}</h2>
  //                   <div className="text-muted">
  //                     {user.role?.toUpperCase() || "USER"}
  //                   </div>
  //                 </div>
  //               </div>

  //               <hr />

  //               <div className="mb-3">
  //                 <div className="text-uppercase text-muted small">Email</div>
  //                 <div className="fw-semibold">{user.Email}</div>
  //               </div>

  //               <div className="mb-3">
  //                 <div className="text-uppercase text-muted small">Password</div>
  //                 <div className="fw-semibold">••••••</div>
  //               </div>

  //               {user.Date && (
  //                 <div className="mb-3">
  //                   <div className="text-uppercase text-muted small">
  //                     Date of Birth
  //                   </div>
  //                   <div className="fw-semibold">
  //                     {new Date(user.Date).toLocaleDateString()}
  //                   </div>
  //                 </div>
  //               )}

  //               <div className="d-flex gap-2 mt-4">
  //                 <button
  //                   className="btn btn-primary btn-sm"
  //                   onClick={() => {
  //                     setIsEditing(true);
  //                     setIsChangingPass(false);
  //                   }}
  //                 >
  //                   Edit Profile
  //                 </button>
  //                 <button
  //                   className="btn btn-outline-secondary btn-sm"
  //                   onClick={() => {
  //                     setIsChangingPass(true);
  //                     setIsEditing(false);
  //                   }}
  //                 >
  //                   Change Password
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* ================= Edit Profile ================= */}
  //       {isEditing && (
  //         <div className="row justify-content-center mt-3">
  //           <div className="col-lg-6">
  //             <div className="card border-0 shadow-sm">
  //               <div className="card-body p-4">
  //                 <h5 className="mb-3">Edit Profile</h5>
  //                 <div className="row g-3">
  //                   <div className="col-12">
  //                     <label className="form-label">Profile Photo</label>
  //                     <div className="d-flex gap-2 align-items-center">
  //                       <input
  //                         type="file"
  //                         accept="image/*"
  //                         className="form-control"
  //                         onChange={(e) =>
  //                           setPhotoFile(e.target.files?.[0] || null)
  //                         }
  //                       />
  //                       <button
  //                         className="btn btn-outline-primary"
  //                         onClick={async () => {
  //                           if (!user?.id) return;
  //                           if (!photoFile) {
  //                             setMessage("⚠️ Please choose a photo first.");
  //                             return;
  //                           }
  //                           try {
  //                             const fd = new FormData();
  //                             fd.append("photo", photoFile);
  //                             const res = await fetch(
  //                               `http://localhost:3000/users/${user.id}/photo`,
  //                               { method: "POST", body: fd }
  //                             );
  //                             if (!res.ok) throw new Error("Upload failed");
  //                             const data = await res.json();
  //                             const updatedUser = { ...user, photo: data.file };
  //                             setUser(updatedUser);
  //                             localStorage.setItem("user", JSON.stringify(updatedUser));
  //                             setMessage("✅ Photo updated.");
  //                             setPhotoFile(null);
  //                           } catch (e) {
  //                             setMessage("❌ Failed to upload photo.");
  //                           }
  //                         }}
  //                       >
  //                         Upload
  //                       </button>
  //                     </div>
  //                   </div>

  //                   <div className="col-md-6">
  //                     <label className="form-label">Name</label>
  //                     <input
  //                       className="form-control"
  //                       value={form.Name}
  //                       onChange={(e) =>
  //                         setForm({ ...form, Name: e.target.value })
  //                       }
  //                     />
  //                   </div>
  //                   <div className="col-md-6">
  //                     <label className="form-label">Email</label>
  //                     <input
  //                       type="email"
  //                       className="form-control"
  //                       value={form.Email}
  //                       onChange={(e) =>
  //                         setForm({ ...form, Email: e.target.value })
  //                       }
  //                     />
  //                   </div>
  //                   <div className="col-md-6">
  //                     <label className="form-label">Date of Birth</label>
  //                     <input
  //                       type="date"
  //                       className="form-control"
  //                       value={form.Date || ""}
  //                       onChange={(e) =>
  //                         setForm({ ...form, Date: e.target.value })
  //                       }
  //                     />
  //                   </div>
  //                   <div className="col-md-6">
  //                     <label className="form-label">Role</label>
  //                     <select
  //                       className="form-select"
  //                       value={form.role}
  //                       onChange={(e) =>
  //                         setForm({ ...form, role: e.target.value })
  //                       }
  //                     >
  //                       <option value="user">User</option>
  //                       <option value="admin">Admin</option>
  //                     </select>
  //                   </div>
  //                 </div>
  //                 <div className="d-flex justify-content-end gap-2 mt-3">
  //                   <button
  //                     className="btn btn-outline-secondary btn-sm"
  //                     onClick={() => setIsEditing(false)}
  //                   >
  //                     Cancel
  //                   </button>
  //                   <button
  //                     className="btn btn-primary btn-sm"
  //                     onClick={() => {
  //                       if (!user?.id) return;

  //                       UserService.updateUserProfile({
  //                         id: user.id,
  //                         Name: form.Name,
  //                         Email: form.Email,
  //                         Date: form.Date,
  //                         role: form.role,
  //                       })
  //                         .then(() => {
  //                           const updatedUser = { ...user, ...form };
  //                           setUser(updatedUser);
  //                           localStorage.setItem(
  //                             "user",
  //                             JSON.stringify(updatedUser)
  //                           );
  //                           setMessage("✅ Profile updated successfully!");
  //                           setIsEditing(false);
  //                         })
  //                         .catch(() =>
  //                           setMessage("❌ Failed to update profile.")
  //                         );
  //                     }}
  //                   >
  //                     Save Changes
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}

  //       {/* ================= Change Password ================= */}
  //       {isChangingPass && (
  //         <div className="row justify-content-center mt-3">
  //           <div className="col-lg-6">
  //             <div className="card border-0 shadow-sm">
  //               <div className="card-body p-4">
  //                 <h5 className="mb-3">Change Password</h5>
  //                 <div className="row g-3">
  //                   <div className="col-md-6">
  //                     <label className="form-label">New Password</label>
  //                     <input
  //                       type="password"
  //                       className="form-control"
  //                       value={passForm.password}
  //                       onChange={(e) =>
  //                         setPassForm({ ...passForm, password: e.target.value })
  //                       }
  //                     />
  //                   </div>
  //                   <div className="col-md-6">
  //                     <label className="form-label">Confirm Password</label>
  //                     <input
  //                       type="password"
  //                       className="form-control"
  //                       value={passForm.confirm}
  //                       onChange={(e) =>
  //                         setPassForm({ ...passForm, confirm: e.target.value })
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //                 <div className="d-flex justify-content-end gap-2 mt-3">
  //                   <button
  //                     className="btn btn-outline-secondary btn-sm"
  //                     onClick={() => setIsChangingPass(false)}
  //                   >
  //                     Cancel
  //                   </button>
  //                   <button
  //                     className="btn btn-primary btn-sm"
  //                     onClick={() => {
  //                       if (!user?.id) return;

  //                       if (!/^\d{6}$/.test(passForm.password)) {
  //                         setMessage("⚠️ Password must be exactly 6 digits.");
  //                         return;
  //                       }
  //                       if (passForm.password !== passForm.confirm) {
  //                         setMessage("⚠️ Passwords do not match.");
  //                         return;
  //                       }

  //                       UserService.changeUserPassword(
  //                         user.id,
  //                         passForm.password
  //                       )
  //                         .then(() => {
  //                           setMessage("✅ Password updated successfully!");
  //                           setIsChangingPass(false);
  //                           setPassForm({ password: "", confirm: "" });
  //                         })
  //                         .catch(() =>
  //                           setMessage("❌ Failed to update password.")
  //                         );
  //                     }}
  //                   >
  //                     Update Password
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  // export default UserDashboard;


  
  import React, { useEffect, useState } from "react";
import UserService from "../Services/Prodservice";
import { Button, Nav, Card, Row, Col, Badge } from "react-bootstrap";
import { FaUser, FaKey, FaCartShopping, FaPen } from "react-icons/fa6";

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview"); // overview | profile | orders | security
  const [form, setForm] = useState({ Name: "", Email: "", Date: "", role: "" });
  const [passForm, setPassForm] = useState({ password: "", confirm: "" });
  const [message, setMessage] = useState("");
  const [ordersWithProd, setOrdersWithProd] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    } else {
      const loggedInEmail = localStorage.getItem("userEmail");

      if (loggedInEmail) {
        UserService.getAllUsers()
          .then((res) => {
            const foundUser = res.data.find((u) => u.Email === loggedInEmail);
            setUser(foundUser || null);
            if (foundUser)
              setForm({
                Name: foundUser.Name || "",
                Email: foundUser.Email || "",
                Date: foundUser.Date || "",
                role: foundUser.role || "",
              });
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }
  }, []);

  // Load orders when user switches to Orders tab
  useEffect(() => {
    const load = async () => {
      try {
        const id = user?.id || user?.user_id;
        if (!id) return;
        const res = await UserService.getUserOrders(id);
        const raw = res.data || res;
        const list = Array.isArray(raw) ? raw : raw.orders || [];
        const enriched = await Promise.all(
          list.map(async (o) => {
            try {
              const pr = await UserService.getProductById(o.product_id);
              const pd = pr.data || pr;
              const p = Array.isArray(pd) ? pd[0] : pd;
              return { ...o, product: p };
            } catch {
              return { ...o };
            }
          })
        );
        setOrdersWithProd(enriched);
      } catch (e) {
        setOrdersWithProd([]);
      }
    };
    if (activeTab === "orders" && user) load();
  }, [activeTab, user]);

  if (loading) {
    return <p className="text-center mt-10">Loading dashboard...</p>;
  }

  if (!user) {
    return (
      <p className="text-center mt-10 text-red-500">
        No user found. Please login again.
      </p>
    );
  }

  return (
    <div className="container my-4 my-lg-5">
      {/* Hero */}
      <Card className="border-0 shadow-sm mb-3" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
        <Card.Body className="p-4">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
              <FaUser size={28} />
            </div>
            <div className="ms-3">
              <h2 className="h4 mb-0">Welcome, {user.Name}</h2>
              <div className="text-muted">{user.role?.toUpperCase() || "USER"}</div>
            </div>
            <div className="ms-auto d-none d-md-block">
              <Badge bg="light" text="dark">Member</Badge>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Tabs */}
      <Nav variant="pills" activeKey={activeTab} onSelect={(k) => setActiveTab(k || "overview")} className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="overview">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="orders">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="security">Security</Nav.Link>
        </Nav.Item>
      </Nav>

      {message && <div className="alert alert-info py-2">{message}</div>}

      {/* Overview */}
      {activeTab === "overview" && (
        <Row className="g-3">
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <div className="text-uppercase text-muted small">Email</div>
                  <div className="fw-semibold">{user.Email}</div>
                </div>
                <div className="mb-3">
                  <div className="text-uppercase text-muted small">Password</div>
                  <div className="fw-semibold">••••••</div>
                </div>
                {user.Date && (
                  <div className="mb-3">
                    <div className="text-uppercase text-muted small">Date of Birth</div>
                    <div className="fw-semibold">{new Date(user.Date).toLocaleDateString()}</div>
                  </div>
                )}
                <div className="d-flex gap-2 mt-2">
                  <Button size="sm" onClick={() => setActiveTab("profile")}>
                    <FaPen className="me-1" /> Edit Profile
                  </Button>
                  <Button size="sm" variant="outline-secondary" onClick={() => setActiveTab("security")}>
                    <FaKey className="me-1" /> Change Password
                  </Button>
                  <Button size="sm" variant="outline-primary" onClick={() => setActiveTab("orders")}>
                    <FaCartShopping className="me-1" /> My Orders
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Profile */}
      {activeTab === "profile" && (
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="mb-3">Edit Profile</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input className="form-control" value={form.Name} onChange={(e) => setForm({ ...form, Name: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={form.Email} onChange={(e) => setForm({ ...form, Email: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" value={form.Date || ""} onChange={(e) => setForm({ ...form, Date: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Role</label>
                    <select className="form-select" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <Button size="sm" variant="outline-secondary" onClick={() => setActiveTab("overview")}>Cancel</Button>
                  <Button size="sm" onClick={() => {
                    if (!user?.id) return;
                    UserService.updateUserProfile({ id: user.id, Name: form.Name, Email: form.Email, Date: form.Date, role: form.role })
                      .then(() => {
                        const updatedUser = { ...user, ...form };
                        setUser(updatedUser);
                        localStorage.setItem("user", JSON.stringify(updatedUser));
                        setMessage("✅ Profile updated successfully!");
                        setActiveTab("overview");
                      })
                      .catch(() => setMessage("❌ Failed to update profile."));
                  }}>Save Changes</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Orders */}
      {activeTab === "orders" && (
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="mb-3">My Orders</h5>
                {ordersWithProd.length === 0 ? (
                  <div className="text-muted">No orders found.</div>
                ) : (
                  ordersWithProd.map((o) => (
                    <Card key={o.id} className="mb-2 border-0" style={{ background: "#fafafa" }}>
                      <Card.Body className="py-2 px-3">
                        <div className="d-flex align-items-center">
                          <img
                            src={o.product?.image_url || o.product?.ImageUrl || o.product?.image || "https://via.placeholder.com/64x64?text=Img"}
                            alt={o.product?.Name || o.product_id}
                            style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 6, border: "1px solid #eee" }}
                          />
                          <div className="ms-3 flex-grow-1">
                            <div className="fw-semibold">{o.product?.Name || o.product?.name || `Product #${o.product_id}`}</div>
                            <div className="text-muted small">{o.address}</div>
                            <div className="text-muted small">Payment: {o.payment_method} • Status: {o.status}</div>
                          </div>
                          <div className="text-nowrap small">{new Date(o.created_at).toLocaleString()}</div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Security */}
      {activeTab === "security" && (
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="mb-3">Change Password</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" value={passForm.password} onChange={(e) => setPassForm({ ...passForm, password: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={passForm.confirm} onChange={(e) => setPassForm({ ...passForm, confirm: e.target.value })} />
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <Button size="sm" variant="outline-secondary" onClick={() => setActiveTab("overview")}>Cancel</Button>
                  <Button size="sm" onClick={() => {
                    if (!user?.id) return;
                    if (!/^\d{6}$/.test(passForm.password)) { setMessage("⚠️ Password must be exactly 6 digits."); return; }
                    if (passForm.password !== passForm.confirm) { setMessage("⚠️ Passwords do not match."); return; }
                    UserService.changeUserPassword(user.id, passForm.password)
                      .then(() => { setMessage("✅ Password updated successfully!"); setActiveTab("overview"); setPassForm({ password: "", confirm: "" }); })
                      .catch(() => setMessage("❌ Failed to update password."));
                  }}>Update Password</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default UserDashboard;