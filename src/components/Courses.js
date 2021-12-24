import React from "react";
/*eslint-disable*/
import node from "../assets/node.jpg";
import mongo from "../assets/mongo.jpg";
import express from "../assets/express.jpg";
import html from "../assets/html.jpg";
import git from "../assets/git.jpg";
import postman from "../assets/postman.jpg";
import boot from "../assets/boot.jpg";

export default function Courses() {
  return (
    <>
      <section>
        <div>
          <a
            href="#course1"
            class=" btn mt-5"
            data-bs-toggle="offcanvas"
            role="button"
            aria-controls="course1"
          >
            <i class="bi bi-menu-button-wide-fill display-6"></i>
          </a>
        </div>
      </section>

      <section>
        <div
          class="offcanvas offcanvas-end  "
          tabindex="-1"
          id="course1"
          aria-labelledby="course-label1"
          style={{ backgroundColor: "#FFB6C1" }}
        >
          <div class="offcanvas-header ">
            <h5 id="offcanvas-title " id="course-label1">
              CONTENT
            </h5>
            <div className="offcanvas-body p-5  ">
              <div className="container-fluid P-5">
                <p id="express">
                  <i class="bi bi-arrow-right-circle-fill"></i>EXPRESS
                </p>
                <p id="postman">
                  <i class="bi bi-arrow-right-circle-fill"></i>POSTMAN
                </p>
                <p id="html">
                  <i class="bi bi-arrow-right-circle-fill"></i>HTML,CSS,JS
                </p>
                <p id="bootstrap">
                  <i class="bi bi-arrow-right-circle-fill"></i>BOOTSTRAP
                </p>

                <p id="mongodb">
                  <i class="bi bi-arrow-right-circle-fill"></i>MONGODB
                </p>
                <p id="nodejs">
                  <i class="bi bi-arrow-right-circle-fill"></i>NODEJS
                </p>
                <p id="git">
                  <i class="bi bi-arrow-right-circle-fill"></i>GIT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=SccSCuHhOw0"
            target={"_blank"}
          >
            <img src={express}></img>
          </a>
          <pre>
            <p className="display-6">Learn Express JS 2021</p>
            <p className="lead">-Web Dev Simplified</p>
          </pre>
        </div>

        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=VywxIQ2ZXw4"
            target={"_blank"}
          >
            <img src={postman}></img>
          </a>
          <pre>
            <p className="display-6">Postman Beginner's Course - API Testing</p>
            <p className="lead">-freeCodeCamp.org</p>
          </pre>
        </div>

        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=1"
            target={"_blank"}
          >
            <img src={html}></img>
          </a>
          <pre>
            <p className="display-6">
              Introduction to HTML, CSS, JavaScript & How websites work?
            </p>
            <p className="lead">-CodeWithHarry</p>
          </pre>
        </div>

        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=O_9u1P5YjVc&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&rv=O_9u1P5YjVc&t=0"
            target={"_blank"}
          >
            <img src={boot}></img>
          </a>
          <pre>
            <p className="display-6">Bootstrap 5 Crash Course Tutoria</p>
            <p className="lead">-The Net Ninja</p>
          </pre>
        </div>

        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=XeDM28c5kO4&list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa"
            target={"_blank"}
          >
            <img src={mongo}></img>
          </a>
          <pre>
            <p className="display-6">MongoDB Tutorial in Hindi </p>
            <p className="lead">-Thapa Technical</p>
          </pre>
        </div>

        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=BLl32FvcdVM"
            target={"_blank"}
          >
            <img src={node}></img>
          </a>
          <pre>
            <p className="display-6">Node Js Tutorial in Hindi </p>
            <p className="lead">-CodeWithHarry</p>
          </pre>
        </div>

        <div className="d-flex border">
          <a
            href="https://www.youtube.com/watch?v=8JJ101D3knE"
            target={"_blank"}
          >
            <img src={git}></img>
          </a>
          <pre>
            <p className="display-6">
              Git Tutorial for Beginners: Learn Git in 1 Hour
            </p>
            <p className="lead">-Programming with Mosh</p>
          </pre>
        </div>
      </section>
    </>
  );
}
