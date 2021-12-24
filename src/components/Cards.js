/*eslint-disable*/
import React from "react";
import boot from "../assets/boot.jpg";
import sass from "../assets/sass.jpg";
import mui from "../assets/mui.jpg";
import reactboot from "../assets/reactboot.jpg";

export default function Cards() {
  return (
    <div>
      <section class="bg-light my-5 w-50 m-auto">
        <div class="container-lg">
          <div class="text-center">
            <h2 class="text-dark display-6" style={{ color: "#996515" }}>
              Full-Stack-Development
            </h2>
            <p class="lead text-muted" style={{ color: "#996515" }}>
              Trending Framworks
            </p>
          </div>

          <div class="row border border-dark bg-dark">
            <div class="col-sm-6 my-3">
              <div class="card">
                <div class="card-body">
                  <img
                    class="card-img-top w-50"
                    src={boot}
                    alt="Card image cap"
                  />
                  <h5 class="card-title">BOOTSRAP 5</h5>
                  <p class="card-text">
                    Bootstrap is a free and open-source CSS framework directed
                    at responsive, mobile-first front-end web development.
                  </p>
                  <a
                    href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
                    class="btn btn-danger"
                    target="_blank"
                  >
                    DOCS
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 my-3">
              <div class="card">
                <div class="card-body">
                  <img
                    class="card-img-top w-50"
                    src={sass}
                    alt="Card image cap"
                  />
                  <h5 class="card-title">SASS</h5>
                  <p class="card-text">
                    Sass is a preprocessor scripting language that is
                    interpreted or compiled into Cascading Style Sheets,Sass
                    consists of two syntaxes.{" "}
                  </p>
                  <a
                    href="https://sass-lang.com/documentation"
                    class="btn btn-danger"
                    target="_blank"
                  >
                    DOCS
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row border border-dark bg-dark">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <img
                    class="card-img-top w-50"
                    src={mui}
                    alt="Card image cap"
                  />
                  <h5 class="card-title">MATERIAL UI</h5>
                  <p class="card-text">
                    MUI provides a simple, customizable, and accessible library
                    of React components. Follow your own design system, or start
                    with Material Design.{" "}
                  </p>
                  <a
                    href="https://mui.com/getting-started/usage/"
                    class="btn btn-danger"
                    target="_blank"
                  >
                    DOCS
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <img
                    class="card-img-top w-50"
                    src={reactboot}
                    alt="Card image cap"
                  />
                  <h5 class="card-title">REACT-BOOTSTRAP</h5>
                  <p class="card-text">
                    React-Bootstrap replaces the Bootstrap JavaScript. Each
                    component has been built from scratch as a true React
                    component.
                  </p>
                  <a
                    href="https://react-bootstrap.github.io/getting-started/introduction"
                    class="btn btn-danger"
                    target="_blank"
                  >
                    DOCS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
