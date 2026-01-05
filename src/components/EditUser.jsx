import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
    imageUrl: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/get-single/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const user = res.data.data;

        setForm({
          name: user.name || "",
          email: user.email || "",
          password: user.password || "",
          phone: user.phone || "",
          image: null,
          imageUrl: "",
        });
        setIsLoading(false);
      } catch (err) {
        toast.error("User not found", err);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        image: file,
        imageUrl: file ? URL.createObjectURL(file) : prev.imageUrl,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      await axios.put(`http://localhost:5000/api/user/update/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("User updated successfully!");
      navigate("/manage");
    } catch (err) {
      toast.error("Failed to update user", err);
    }
  };

  if (isLoading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="alert alert-info text-center">Edit User</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control my-2"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control my-2"
          required
        />

        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="form-control my-2"
          required
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="form-control my-2"
        />

        {form.imageUrl && (
          <div className="mb-3">
            <img
              src={form.imageUrl}
              alt="User Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
