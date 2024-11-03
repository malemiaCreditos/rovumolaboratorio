"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const Appointment = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title">Appointment</h4>
            <h1 className="display-5 mb-4">
              Make An Appointment To Start Your Project
            </h1>
            <p className="mb-4">
              At Rovumo, we understand that the quality of mineral coal plays a
              crucial role in your operations. Whether you are looking to
              enhance your processes, ensure compliance with regulations, or
              improve the overall efficiency of your coal usage, we are here to
              help!
            </p>
            <div className="row g-4">
              <div className="col-12">
                <div className="d-flex">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                    style={{ width: "65px", height: "65px" }}
                  >
                    <i className="fa fa-2x fa-phone-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Call Us Now</p>
                    <h3 className="mb-0">+258 84 381 4533</h3>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                    style={{ width: "65px", height: "65px" }}
                  >
                    <i className="fa fa-2x fa-envelope-open text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <h3 className="mb-0">info@rovumo.co.mz</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  style={{ height: "55px" }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  style={{ height: "55px" }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Mobile"
                  style={{ height: "55px" }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <select className="form-select" style={{ height: "55px" }}>
                  <option value="Choose Service">Choose Service</option>
                  <option value="1">Chemical Composition Analysis</option>
                  <option value="2">Physical Properties Analysis</option>
                  <option value="3">Calorific Value Testing</option>
                  <option value="3">Carbonization Analysis</option>
                </select>
              </div>
              <div className="col-12 col-sm-6">
                <div className="date" id="date" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    placeholder="Choose Date"
                    data-target="#date"
                    data-toggle="datetimepicker"
                    style={{ height: "55px" }}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="time" id="time" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    placeholder="Choose Date"
                    data-target="#time"
                    data-toggle="datetimepicker"
                    style={{ height: "55px" }}
                  />
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
