"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const Testimonial = () => {
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
          <h4 className="section-title">Testimonial</h4>
          <h1 className="display-5 mb-4">
            Thousands Of Customers Who Trust Us And Our Services
          </h1>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div
            className="testimonial-item text-center"
            data-dot="<img className='img-fluid' src='img/Avatar22.png' alt=''>"
          >
            <p className="fs-5">
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            <h3>Client Name</h3>
            <span className="text-primary">Profession</span>
          </div>
          <div
            className="testimonial-item text-center"
            data-dot="<img className='img-fluid' src='img/Avatar22.png' alt=''>"
          >
            <p className="fs-5">
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            <h3>Client Name</h3>
            <span className="text-primary">Profession</span>
          </div>
          <div
            className="testimonial-item text-center"
            data-dot="<img className='img-fluid' src='img/Avatar22.png' alt=''>"
          >
            <p className="fs-5">
              Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
              duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
              erat magna elitr erat sit sit erat at rebum justo sea clita.
            </p>
            <h3>Client Name</h3>
            <span className="text-primary">Profession</span>
          </div>
        </div>
      </div>
    </div>
  );
};
