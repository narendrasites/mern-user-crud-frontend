import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const navigate = useNavigate();
  // Handle input field
  const inputHandler = (e) => {
    e.preventDefault();
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  // Handle image field
  const imageHandler = (e) => {
    setInputVal({ ...inputVal, image: e.target.files[0] });
  };

  // Handle form submit

  const addUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", inputVal.name);
    formData.append("email", inputVal.email);
    formData.append("password", inputVal.password);
    formData.append("image", inputVal.image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTimeout(() => {
        if (res.status === 201 || res.data.sucess) {
          toast.success("User Created Successfully");
          setInputVal({
            name: "",
            email: "",
            password: "",
            image: null,
          });
          navigate("/manage");
        } else {
          toast.error("Failed to create user!");
        }
      }, [3000]);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Error adding user!");
    }
  };

  return (
    <div className="container mt-3">
      <h1 className="alert alert-info text-center">Create User</h1>
      <div className="row">
        <div className="col-sm-4">
          <form action="" onSubmit={addUser}>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={inputHandler}
                value={inputVal.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={inputHandler}
                value={inputVal.email}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={inputHandler}
                value={inputVal.password}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image">Enter Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={imageHandler}
                accept="image/*"
                required
              />
            </div>
            <button className="btn btn-info">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
