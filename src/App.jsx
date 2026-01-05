import React, { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import CreateUser from "./components/CreateUser";
import ManageUser from "./components/ManageUser";
import EditUser from "./components/EditUser";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  // Token check karne ke liye state
  const [auth, setAuth] = useState(localStorage.getItem("token"));

  // Jab bhi localStorage change ho (Login/Logout), state update ho jaye
  useEffect(() => {
    setAuth(localStorage.getItem("token"));
  }, []);
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        {auth && <Navbar />}
        <Routes>
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/signup"
            element={!auth ? <Signup /> : <Navigate to="/" />}
          ></Route>

          {/* Protected routes */}
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/about"
            element={auth ? <About /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/add"
            element={auth ? <CreateUser /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/manage"
            element={auth ? <ManageUser /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/edit/:id"
            element={auth ? <EditUser /> : <Navigate to="/login" />}
          ></Route>
          <Route path="*" element={<Navigate to={auth ? "/" : "/login"} />} />
        </Routes>
        {auth && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
