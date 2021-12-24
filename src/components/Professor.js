/*eslint-disable*/
import React from "react";
import node from "../assets/node.jpg";
import mongo from "../assets/mongo.jpg";
import express from "../assets/express.jpg";
import template from "../assets/template.jpg";
import html from "../assets/html.jpg";
import git from "../assets/git.jpg";
import nodebb from "../assets/nodebb.jpg";

export default function professor() {
  return (
    <>
      <div className="mt-4 mb-2 d-flex justify-content-center">
        <a
          href="#sidebar1"
          class="btn btn-outline-info me-2 p-1  "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar1"
        >
          NodeJS
        </a>

        <a
          href="#sidebar2"
          class="btn btn-outline-info me-2 "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar2"
        >
          MongoDB
        </a>

        <a
          href="#sidebar3"
          class="btn btn-outline-info me-2 "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar3"
        >
          ExpressJS
        </a>

        <a
          href="#sidebar4"
          class="btn btn-outline-info me-2 "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar4"
        >
          Template Engine
        </a>

        <a
          href="#sidebar5"
          class="btn btn-outline-info me-2 "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar5"
        >
          HTML,CSS,JS
        </a>

        <a
          href="#sidebar6"
          class="btn btn-outline-info me-2 "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar6"
        >
          Git
        </a>

        <a
          href="#sidebar7"
          class="btn btn-outline-info me-2 "
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar7"
        >
          NodeBB
        </a>

        <div
          class="offcanvas offcanvas-bottom "
          tabindex="-1"
          id="sidebar1"
          aria-labelledby="sidebar-label1"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header ">
            <h5 id="offcanvas-title " id="sidebar-label1">
              NodeJS
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={node}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="col-6 m-auto ">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=RLtyhwFtXQA"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=RLtyhwFtXQA
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a href=" https://nodejs.org/en/docs/" target="_blank">
                          {" "}
                          https://nodejs.org/en/docs/
                        </a>
                      </small>
                      <br />
                      <small>
                        -Github:{" "}
                        <a
                          href="https://github.com/Riser17/BankApp.git"
                          target="_blank"
                        >
                          {" "}
                          https://github.com/Riser17/BankApp.git
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom "
          tabindex="-1"
          id="sidebar2"
          aria-labelledby="sidebar-label2"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvas-title" id="sidebar-label">
              MongoDB
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={mongo}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="col-6 m-auto">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=XeDM28c5kO4&list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=XeDM28c5kO4&list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a href=" https://docs.mongodb.com/" target="_blank">
                          {" "}
                          https://docs.mongodb.com/
                        </a>
                      </small>
                      <br />
                      <small>
                        -Github:{" "}
                        <a
                          href="https://github.com/Riser17/BankApp.git"
                          target="_blank"
                        >
                          {" "}
                          https://github.com/Riser17/BankApp.git
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="sidebar3"
          aria-labelledby="sidebar-label3"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvas-title" id="sidebar-label">
              ExpressJS
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={express}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="col-6 m-auto">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=SccSCuHhOw0"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=SccSCuHhOw0
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a
                          href=" https://expressjs.com/en/starter/installing.html"
                          target="_blank"
                        >
                          {" "}
                          https://expressjs.com/en/starter/installing.html
                        </a>
                      </small>
                      <br />
                      <small>
                        -Github:{" "}
                        <a
                          href="https://github.com/Riser17/BankApp.git"
                          target="_blank"
                        >
                          {" "}
                          https://github.com/Riser17/BankApp.git
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="sidebar4"
          aria-labelledby="sidebar-label4"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvas-title" id="sidebar-label">
              Template Engine
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={template}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="col-6 m-auto">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=oZGmHNZv7Sc"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=oZGmHNZv7Sc
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a
                          href=" https://expressjs.com/en/resources/template-engines.html"
                          target="_blank"
                        >
                          {" "}
                          https://expressjs.com/en/resources/template-engines.html
                        </a>
                      </small>
                      <br />
                      <small>
                        -Github:{" "}
                        <a
                          href="https://github.com/Riser17/BankApp.git"
                          target="_blank"
                        >
                          {" "}
                          https://github.com/Riser17/BankApp.git
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="sidebar5"
          aria-labelledby="sidebar-label5"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvas-title" id="sidebar-label">
              HTML,CSS,JS
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={html}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="col-6 m-auto">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a
                          href=" https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
                          target="_blank"
                        >
                          {" "}
                          https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
                        </a>
                      </small>
                      <br />
                      <small>
                        -Github:{" "}
                        <a
                          href="https://github.com/Riser17/BankApp.git"
                          target="_blank"
                        >
                          {" "}
                          https://github.com/Riser17/BankApp.git
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom "
          tabindex="-1"
          id="sidebar6"
          aria-labelledby="sidebar-label6"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvas-title" id="sidebar-label">
              GIT
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={git}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="col-6 m-auto">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=RGOj5yH7evk"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=RGOj5yH7evk
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a href=" https://git-scm.com/doc" target="_blank">
                          {" "}
                          https://git-scm.com/doc
                        </a>
                      </small>
                      <br />
                      <small>
                        -Github:{" "}
                        <a
                          href="https://github.com/Riser17/BankApp.git"
                          target="_blank"
                        >
                          {" "}
                          https://github.com/Riser17/BankApp.git
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-bottom "
          tabindex="-1"
          id="sidebar7"
          aria-labelledby="sidebar-label7"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header">
            <h5 id="offcanvas-title" id="sidebar-label">
              NodeBB
            </h5>
            <div className="offcanvas-body p-1 ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      class="card-img-fluid  rounded  "
                      src={nodebb}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-6 m-auto">
                    <div>
                      <p className="lead">Links</p>
                      <small>
                        -YouTube:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=VNSZaEZxQ6c"
                          target="_blank"
                        >
                          https://www.youtube.com/watch?v=VNSZaEZxQ6c
                        </a>
                      </small>
                      <br />
                      <small>
                        -Docs:
                        <a href="https://docs.nodebb.org/" target="_blank">
                          {" "}
                          https://docs.nodebb.org/
                        </a>
                      </small>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
