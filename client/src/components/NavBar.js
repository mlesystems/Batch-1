import React, { useState } from "react";

function clearData() {
   localStorage.clear();
   window.location.reload(false);
}; 
export const NavBar = () => {
  return (
    <>
      {/* This code for NavBar. */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              MLE Systems
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >
                    Time Off
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign in
                  </a>
                </li> */}
                <li className="nav-item" >
                  <a className="nav-link " href="#" onClick={clearData} >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
