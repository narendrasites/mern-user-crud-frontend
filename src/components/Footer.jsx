import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          {/* Column 1: App Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              MERN CRUD App
            </h5>
            <p>
              A powerful user management system built with MongoDB, Express,
              React, and Node.js. Manage your data efficiently and securely.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              Quick Links
            </h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
            <p>
              <Link to="/add" className="text-white text-decoration-none">
                Create User
              </Link>
            </p>
            <p>
              <Link to="/manage" className="text-white text-decoration-none">
                Manage Users
              </Link>
            </p>
            <p>
              <Link to="/about" className="text-white text-decoration-none">
                About Us
              </Link>
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              Contact
            </h5>
            <p>
              <i className="fas fa-home me-3"></i> Indore, MP, India
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i> rajput10092001@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> +91 7828907323
            </p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Bottom Section: Copyright */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright ©{new Date().getFullYear()} All rights reserved by:
              <Link to="/" className="text-decoration-none">
                <strong className="text-info"> Narendra Rajput</strong>
              </Link>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
