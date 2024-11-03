"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const Project = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="container-xxl project py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp max-w-[600px]"
          data-wow-delay="0.1s"
        >
          <h4 className="section-title">Our Analysis</h4>
          <h1 className="display-5 mb-4">
            Visit Our Latest Analysis And Our Works
          </h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-1"
                type="button"
              >
                <h3 className="m-0">01. Chemical Composition Analysis</h3>
              </button>
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-2"
                type="button"
              >
                <h3 className="m-0">02. Physical Properties Analysis</h3>
              </button>
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-3"
                type="button"
              >
                <h3 className="m-0">03. Carbonization Analysis</h3>
              </button>
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-4"
                type="button"
              >
                <h3 className="m-0">04. Determination of Impuritiesx</h3>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                  <div className="col-md-6 min-h-[350px]">
                    <div className="position-relative h-100">
                      <img
                        className="object-cover position-absolute img-fluid w-100 h-100"
                        src="img/LAB.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h1 className="mb-3">Explanation</h1>
                    <p className="mb-4">
                      This analysis determines the percentage of chemical
                      elements present in the coal, such as carbon, hydrogen,
                      sulfur, nitrogen, and oxygen. It is essential for
                      assessing the quality of the coal and its potential as a
                      fuel.
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Design
                      Approach
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>
                      Innovative Solutions
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Project
                      Management
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                  <div className="col-md-6 min-h-[350px]">
                    <div className="position-relative h-100">
                      <img
                        className="object-cover position-absolute img-fluid w-100 h-100"
                        src="img/labt2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h1 className="mb-3">Explanation</h1>
                    <p className="mb-4">
                      Evaluates the physical characteristics of the coal,
                      including density, particle size, moisture, and heat of
                      combustion. These properties are important for
                      understanding the performance of coal in various
                      applications.
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Design
                      Approach
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>
                      Innovative Solutions
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Project
                      Management
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                  <div className="col-md-6 min-h-[350px]">
                    <div className="position-relative h-100">
                      <img
                        className="object-cover position-absolute img-fluid w-100 h-100"
                        src="img/lab4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h1 className="mb-3">Explanation</h1>
                    <p className="mb-4">
                      Studies the behavior of coal during the carbonization
                      process, which is important for coke production in the
                      steel industry. This analysis helps to understand the
                      quality of coal for specific applications.
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Design
                      Approach
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>
                      Innovative Solutions
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Project
                      Management
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                  <div className="col-md-6 min-h-[350px]">
                    <div className="position-relative h-100">
                      <img
                        className="object-cover position-absolute img-fluid w-100 h-100"
                        src="img/lab4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h1 className="mb-3">Explanation</h1>
                    <p className="mb-4">
                      Identifies and quantifies impurities in the coal, such as
                      ash, heavy metals, and sulfates. Knowledge of these
                      impurities is vital for assessing the environmental impact
                      and quality of the coal.
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Design
                      Approach
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>
                      Innovative Solutions
                    </p>
                    <p>
                      <i className="fa fa-check text-primary me-3"></i>Project
                      Management
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
