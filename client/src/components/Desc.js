import React from "react";
// import "./styles/Headerstyle.css"
import cardImage1 from "./cardImage1.png"
import cardImage2 from "./cardImage2.png"
import cardImage3 from "./cardImage3.png"
import cardImage4 from "./cardImage4.png"

export const Desc = () => {
  return (
    <>
      {/* <!-- Dtails Component using cards --> */}
      <div>
        <div class="container my-4">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <img
                  src={cardImage1}
                  class="card-img-top"
                  alt="Image Loading..."
                />
                <div class="card-body">
                  <h5 class="card-title">Service Now</h5>
                  <p class="card-text">
                    We Provides Best Solutions In ServiceNow.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={cardImage2}
                  class="card-img-top"
                  alt="Image Loading..."
                />
                <div class="card-body">
                  <h5 class="card-title">Sales Force</h5>
                  <p class="card-text">
                  We Provides Best Solutions In Sales Force.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={cardImage3}
                  class="card-img-top"
                  alt="Image Loading..."
                />
                <div class="card-body">
                  <h5 class="card-title">Pega</h5>
                  <p class="card-text">
                  We Provides Best Solutions In Pega.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={cardImage4}
                  class="card-img-top"
                  alt="Image Loading..."
                />
                <div class="card-body">
                  <h5 class="card-title">Block Chain</h5>
                  <p class="card-text">
                  We Provides Best Solutions In Block Chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
