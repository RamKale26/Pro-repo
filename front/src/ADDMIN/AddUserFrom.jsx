import React, { useState } from "react";

const AddUserForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Added: ${form.name} (${form.email})`);
    setForm({ name: "", email: "" });
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="form-control mb-2" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="form-control mb-2" value={form.email} onChange={handleChange} required />
        <button className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
