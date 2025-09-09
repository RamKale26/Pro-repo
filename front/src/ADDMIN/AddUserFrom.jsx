import React, { useState } from "react";
import Prodservice from "../Services/Prodservice";

const AddUserForm = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    password: "",
    dob: "",
    role: "user",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // clear field-specific error when user edits
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }
  };

  const validateForm = () => {
    const errs = {};
    const name = form.Name.trim();
    const email = form.Email.trim();
    const pwd = form.password;
    const dob = form.dob;
    const role = form.role;

    if (!name) errs.Name = "Name is required";
    else if (!/^[A-Za-z ]+$/.test(name)) errs.Name = "Name must contain only alphabets";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) errs.Email = "Email is required";
    else if (!emailRegex.test(email)) errs.Email = "Enter a valid email";

    if (!pwd) errs.password = "Password is required";
    else if (!/^\d{6}$/.test(pwd)) errs.password = "Password must be exactly 6 digits";

    if (!dob) errs.dob = "Date of Birth is required";

    if (!role) errs.role = "Role is required";

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setError("");
    if (!validateForm()) {
      setError("Please fix the errors below.");
      return;
    }
    const Name = form.Name.trim();
    const Email = form.Email.trim();
    const password = form.password;
    const dob = form.dob;
    setIsSaving(true);
    const role = form.role || "user";
    // Match your DB columns: id, Name, Email, password, Date, role
    const payload = { Name, Email, password, Date: dob, role };

    Prodservice.addUsers(payload)
      .then(() => {
        setSuccess("User added successfully.");
        setForm({ Name: "", Email: "", password: "", role: "user" });
      })
      .catch((err) => {
        console.error(err);
        const msg = err?.response?.data?.message || err?.response?.data || err?.message || "Failed to add user. Please try again.";
        setError(String(msg));
      })
      .finally(() => setIsSaving(false));
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Add New User</h2>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={form.Name}
                    onChange={handleChange}
                    className={`form-control ${fieldErrors.Name ? "is-invalid" : ""}`}
                    placeholder="Full name"
                    required
                  />
                  {fieldErrors.Name && <div className="invalid-feedback">{fieldErrors.Name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="Email"
                    value={form.Email}
                    onChange={handleChange}
                    className={`form-control ${fieldErrors.Email ? "is-invalid" : ""}`}
                    placeholder="name@example.com"
                    required
                  />
                  {fieldErrors.Email && <div className="invalid-feedback">{fieldErrors.Email}</div>}
                </div>

                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className={`form-control ${fieldErrors.password ? "is-invalid" : ""}`}
                      placeholder="Create password"
                      minLength={6}
                      required
                    />
                    {fieldErrors.password && <div className="invalid-feedback">{fieldErrors.password}</div>}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      className={`form-control ${fieldErrors.dob ? "is-invalid" : ""}`}
                      required
                    />
                    {fieldErrors.dob && <div className="invalid-feedback">{fieldErrors.dob}</div>}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Role</label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className={`form-select ${fieldErrors.role ? "is-invalid" : ""}`}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                    {fieldErrors.role && <div className="invalid-feedback">{fieldErrors.role}</div>}
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="btn btn-primary" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Add User"}
                  </button>
                </div>
      </form>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default AddUserForm;
