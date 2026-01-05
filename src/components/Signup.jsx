import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/signup", form);
      toast.success("Signup Successfully");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 shadow">
          <h2 className="text-center">Signup</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-3"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button className="btn btn-success w-100">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
