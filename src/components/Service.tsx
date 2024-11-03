"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;

export const Service = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      {" "}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp max-w-[600px]"
            data-wow-delay="0.1s"
            // style={{max-width:"600px"}}
          >
            <h4 className="section-title">Our Services</h4>
            <h1 className="display-5 mb-4">
              We Show You The Best of Our Services
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/Carvao1.jpg" alt="" />
                <div className="service-text p-5">
                  {/* <img className="mb-4" src="img/icons/icon-5.png" alt="Icon" /> */}
                  <h3 className="mb-3">Chemical Composition Analysis</h3>
                  <p className="mb-4">
                    Determining the elements present in coal, such as carbon,
                    hydrogen, sulfur, nitrogen, and oxygen, to assess its
                    quality.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/Carvao2.jpg" alt="" />
                <div className="service-text p-5">
                  {/* <img className="mb-4" src="img/icons/icon-6.png" alt="Icon" /> */}
                  <h3 className="mb-3">Physical Properties Analysis</h3>
                  <p className="mb-4">
                    Evaluating the physical characteristics of coal, including
                    density, particle size, moisture, and heat of combustion.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/Carvao3.jpg" alt="" />
                <div className="service-text p-5">
                  {/* <img className="mb-4" src="img/icons/icon-7.png" alt="Icon" /> */}
                  <h3 className="mb-3">Calorific Value Testing</h3>
                  <p className="mb-4">
                    Measuring the calorific power of coal, essential for
                    determining its efficiency as a fuel.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/Carvao4.jpg" alt="" />
                <div className="service-text p-5">
                  {/* <img className="mb-4" src="img/icons/icon-8.png" alt="Icon" /> */}
                  <h3 className="mb-3">Carbonization Analysis</h3>
                  <p className="mb-4">
                    Studying the behavior of coal during the carbonization
                    process, important for coke production in the steel
                    industry.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/Carvao5.jpg" alt="" />
                <div className="service-text p-5">
                  {/* <img className="mb-4" src="img/icons/icon-9.png" alt="Icon" /> */}
                  <h3 className="mb-3">Determination of Impurities</h3>
                  <p className="mb-4">
                    Identifying and quantifying impurities, such as ash, heavy
                    metals, and sulfates, that can affect the quality of coal.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="img/Carvao6.jpg" alt="" />
                <div className="service-text p-5">
                  {/* <img
                    className="mb-4"
                    src="img/icons/icon-10.png"
                    alt="Icon"
                  /> */}
                  <h3 className="mb-3">Consulting Services</h3>
                  <p className="mb-4">
                    Specialized technical consulting for companies looking to
                    optimize coal quality and combustion processes.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
