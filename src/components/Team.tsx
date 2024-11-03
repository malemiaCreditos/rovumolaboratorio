"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const Team = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp max-w-[600px]"
          data-wow-delay="0.1s"
        >
          <h4 className="section-title">Team Members</h4>
          <h1 className="display-5 mb-4">
            We Are Creative Team For Your Dream Project
          </h1>
        </div>
        <div className="row g-0 team-items">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/Avatar22.png" alt="" />
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Team Name</h3>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/Avatar22.png" alt="" />
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Team Name</h3>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/Avatar22.png" alt="" />
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Team Name</h3>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/Avatar22.png" alt="" />
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Team Name</h3>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
