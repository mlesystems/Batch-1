/*eslint-disable*/
import React from "react";
import ReactDOM from "react-dom";

export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-light lead border">
        <div className="row">
          <div className="col-4 border rounded">
            <div className="text-info">About us</div>
            <div className="text-info">Contact us</div>
          </div>

          <div className="col-4 border rounded">
            <div className="text-info">Blogs</div>
            <div className="text-info">help</div>
          </div>

          <div className="col-4 border rounded">
            <div className="text-info">Teams</div>
            <div className="text-info">Join</div>
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center">
            <pre>
              <i class="bi bi-badge-cc mt-5"></i>CourseCamp
              <p className="mt-5">@copyright 2021</p>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
