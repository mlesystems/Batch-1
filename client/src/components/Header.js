import React from "react";
import "./styles/Headerstyle.css";
import sliderImage1 from "./sliderImage1.png";
import sliderImage2 from "./sliderImage2.png";
// import thirdImage from "../Components/thirdImage.jpg"

export default function Header() {
  return (
    <>
      {/* This Code Is For Slider */}

      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" id="slider-1">
              <img src={sliderImage1} class="d-block w-100" alt="Loading..." />
              <div class="carousel-caption d-none d-md-block bg-opacity-100">
                <h1 class="fw-bold" id="slider1-head">
                  {/* Welcome To MLE Systems */}
                </h1>
                <p>
                  <h2 class="fw-bold" id="slider1-desc">
                    {/* {" "} */}
                    {/* we provide best IT solutions{" "} */}
                  </h2>
                </p>
                <button class="btn btn-danger">ServiceNow</button>
                <button class="btn btn-primary">Sales Force</button>
                <button class="btn btn-success">Full Stack</button>
              </div>
            </div>
            <div class="carousel-item" id="slider-2">
              <img src={sliderImage2} class="d-block w-100" alt="Loading..." />
              <div class="carousel-caption d-none d-md-block bg-opacity-100">
                <h1 class="fw-bold" id="slider2-head">
                  {/* Welcome To MLE Systems */}
                </h1>
                <p>
                  <h2 class="fw-bold" id="slider2-desc">
                    {/* {" "} */}
                    {/* we provide best IT solutions{" "} */}
                  </h2>
                </p>
                <button class="btn btn-danger">Pega</button>
                <button class="btn btn-primary">Block-Chain</button>
                <button class="btn btn-success">AI/ML</button>
              </div>
            </div>
            {/* <div class="carousel-item" id="slider-3">
        <img src={thirdImage.jpg} class="d-block w-100" alt="Loading..." />
        <div class="carousel-caption d-none d-md-block bg-opacity-100">
          <h1 class="fw-bold" id="slider3-head">Welcome To
            MLE Systems</h1>
          <p>
          <h2 class="fw-bold" id="slider3-desc"> we provide best IT solutions </h2>
          </p>
          <button class="btn btn-danger">Web Development</button>
          <button class="btn btn-primary">Data Analytics</button>
          <button class="btn btn-success">Cloud Adoption & Services</button>
        </div>
      </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Read More To Description Code */}

      <div>
        <div class=" text-center my-4">
          <div>
            {" "}
            <h1 class="text-danger fw-bold ">Welcome To MLE Systems </h1>{" "}
          </div>
          <div class="card-body">
            <h2 class="card-title text-primary">Our Services</h2>
            <p class="card-text">
              {" "}
              <h3> We provides various IT services </h3>{" "}
            </p>
            {/* <a href="#" class="btn btn-primary">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}