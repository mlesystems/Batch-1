/*eslint-disable*/
import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export default function Slider1() {
  return (
    <>
      <div class="container-fluid justify-content-center align-items-center mt-5 ">
        <div class="row lead">
          <div
            class=" col-1 badge bg-primary btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller."
          >
            MVC
          </div>
          <div
            class="col-1 badge bg-secondary btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Nodemon is a command-line interface (CLI) utility developed by @rem that wraps your Node app, watches the file system, and automatically restarts the process."
          >
            NODEMON
          </div>
          <div
            class="col-1 badge bg-success btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently."
          >
            NPM
          </div>
          <div
            class="col-1 badge bg-danger btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Yarn is a new package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely"
          >
            YARN
          </div>
          <div
            class="col-1 badge bg-warning btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="PM2 or Process Manager 2, is an Open Source, production Node. js process manager helping Developers and Devops manage Node. js applications in production environment"
          >
            PM2
          </div>
          <div
            class="col-1 badge bg-info btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="In Node. js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders."
          >
            NODE
          </div>
          <div
            class="col-1 badge bg-info btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Template engine helps us to create an HTML template with minimal code.Popular Template engine are pug,eg6,hbs."
          >
            TEMPLATE
          </div>
          <div
            class="col-1 badge bg-dark btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated."
          >
            POSTMAN
          </div>
          <div
            class="col-1 badge bg-success btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="MongoDB Compass Community is free, but a bit limited. It allows you to connect to your MongoDB Database to run queries, check queries execution plans, manage indexes, and create, drop/create collections and databases."
          >
            COMPASSDB
          </div>
          <div
            class="col-1 badge bg-danger btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. "
          >
            VSCODE
          </div>
          <div
            class="col-1 badge bg-primary btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="A command-line interface (CLI) processes commands to a computer program in the form of lines of text. "
          >
            CLI
          </div>
          <div
            class="col-1 badge bg-secondary btn btn-outline-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). It is easy to create a template using JSX in React."
          >
            JSX
          </div>
        </div>
      </div>

      <section class="mt-3">
        <div class="container-fluid w-50 bg-dark">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={image1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={image2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={image3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section class="mt-5">
        <div class="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-4 lead" style={{ color: "#996515" }}>
                <i class="bi bi-play-circle-fill pr-3 m-2"></i>Learn in-demand
                skills
              </div>
              <div className="col-4 lead" style={{ color: "#996515" }}>
                <i class="bi bi-star-fill p-3"></i>Choose courses taught by
                experts
              </div>
              <div className="col-4 lead" style={{ color: "#996515" }}>
                <i class="bi bi-infinity pl-3 m-2"></i>Learn at your own place,
                with lifetime
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
