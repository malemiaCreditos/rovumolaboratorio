"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const Feature = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Why Choose Us!</h4>
              <h1 className="display-5 mb-4">
                Why You Should Trust Us? Learn More About Us!
              </h1>
              <p className="mb-4">
                Rovumo has a team of highly qualified and experienced
                professionals with deep knowledge in the analysis of mineral
                coal and its properties. Our experience in the industry ensures
                precise and reliable results.
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="img/icons/icon-2.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Cutting-Edge Technology</h3>
                      <p className="mb-0">
                        We utilize advanced equipment and technologies in our
                        laboratories to perform high-precision analyses. This
                        enables us to provide quick and accurate results,
                        essential for informed decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="img/icons/icon-3.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Customized Services</h3>
                      <p className="mb-0">
                        We offer tailored solutions adapted to the specific
                        needs of each client. Our services can be adjusted to
                        meet the unique demands of different types of coal and
                        industrial sectors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="img/icons/icon-4.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Detailed and Clear Reports</h3>
                      <p className="mb-0">
                        We provide comprehensive and easy-to-understand
                        technical reports that include analysis results,
                        interpretations, and practical recommendations, allowing
                        our clients to make informed decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img className="img-fluid" src="img/lab2.jpg" alt="" />
                <img className="img-fluid" src="img/lab1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
