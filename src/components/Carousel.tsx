"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;

export const Carousel = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      {" "}
      <div
        className="container-fluid p-0 pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="owl-carousel header-carousel position-relative">
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='img/carvaoArder.jpg'>"
          >
            <img className="img-fluid" src="img/carvaoArder.jpg" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-1 text-white animated slideInDown">
                      Comprehensive Coal Analysis
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      Oferecemos serviços laboratoriais de ponta para avaliar a
                      We offer state-of-the-art laboratory services to assess
                      the quality of coal, ensuring precision and reliability in
                      every result. Trust our expertise for your industrial
                      needs.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInLeft"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='img/minaCarvao.jpg'>"
          >
            <img className="img-fluid" src="img/minaCarvao.jpg" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-1 text-white animated slideInDown">
                      Customized Testing for Every Requirement
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      Tailored to market demands, we customize tests to meet
                      each client’s specifications, providing detailed results
                      for specific coal applications.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInLeft"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='img/tunelCarvao.jpg'>"
          >
            <img className="img-fluid" src="img/tunelCarvao.jpg" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-1 text-white animated slideInDown">
                      Certification and Compliance Guaranteed
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      We conduct analyses that meet the highest standards of
                      compliance and regulation, helping your company obtain
                      essential market certifications.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInLeft"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
