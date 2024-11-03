"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;

export const About = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      {" "}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="img/minacarca.jpg" alt="" />
                <img className="img-fluid" src="img/carvaoAceso.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="section-title">About Us</h4>
              <h1 className="display-5 mb-4">
                Specializes in laboratory testing of mineral coal, dedicated to
                providing precise and reliable solutions.
              </h1>
              <p>
                Since our founding, we have aimed to add real value to the
                energy sector and to industries that rely on mineral coal. We
                understand that every sample can have a direct impact on a wide
                range of industrial processes, which is why we ensure detailed
                and customized analyses that meet each specific demand.
              </p>
              <p className="mb-4">
                With a focus on excellence, reliability, and continuous
                innovation, our mission is to be the trusted partner for
                companies seeking precision and safety in their laboratory
                analyses. Whether for certification, process optimization, or
                regulatory compliance, Rovumo is here to help your business
                achieve its goals.
              </p>
              <div className="d-flex align-items-center mb-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                  style={{ width: "120px", height: "120px" }}
                >
                  <h1 className="display-1 mb-n2" data-toggle="counter-up">
                    5
                  </h1>
                </div>
                <div className="ps-4">
                  <h3>Years</h3>
                  <h3>Working</h3>
                  <h3 className="mb-0">Experience</h3>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
