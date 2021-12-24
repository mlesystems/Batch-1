/*eslint-disable*/
import React from "react";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark pt-1 pb-1 fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand outline-light" href="#intro">
            <span class="text-light fw-bold border rounded p-2 ">
              <i class="bi bi-badge-cc m-3"></i>CourseCamp
            </span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ">
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/Login">
                  COMMUNITY
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/Courses">
                  COURSES
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a class="nav-link" href="#links">
                  LINKS
                </a>
              </li>
            </ul>
          </div>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="main-nav"
          >
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a
                  class="btn-sm btn-outline-light me-2 m-2 border"
                  href="/Login"
                >
                  LOG IN{" "}
                </a>
                <a
                  class="btn-sm btn-outline-success me-2 m-2 border "
                  href="/Signup"
                >
                  SIGN UP{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
