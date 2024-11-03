"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const Facts = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container pt-5">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="img/icons/carvao1.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Sub-bituminous Coal</h3>
                <p className="mb-0">
                  This type of coal has a carbon content between 70% and 80% and
                  is intermediate between lignite and bituminous coal. It has a
                  higher calorific value than lignite and lower moisture
                  content.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="img/icons/carvao2.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Bituminous Coal</h3>
                <p className="mb-0">
                  With a carbon content between 77% and 87%, bituminous coal is
                  one of the most common forms of coal. It has a high energy
                  value and is characterized by its black color and shiny
                  texture.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="img/icons/carvao3.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Anthracite</h3>
                <p className="mb-0">
                  This is the purest type of coal, with a carbon content above
                  87% and low levels of impurities. It is very dense, with a
                  high calorific value, and has a shiny black color and high
                  hardness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
