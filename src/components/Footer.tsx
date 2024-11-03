"use client";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wow.js") : null;
export const FooterCla = () => {
  const year = new Date().getFullYear();
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div
      className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Address</h3>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary me-3"></i>Cidade
              de Tete - Moçambique
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-primary me-3"></i>+258 84 381
              4533
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary me-3"></i>
              info@rovumo.co.mz
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-body me-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-outline-body me-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-outline-body me-1" href="">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-square btn-outline-body me-0" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Services</h3>
            <a className="btn btn-link" href="">
              Chemical Composition Analysis
            </a>
            <a className="btn btn-link" href="">
              Physical Properties Analysis
            </a>
            <a className="btn btn-link" href="">
              Calorific Value Testing
            </a>
            <a className="btn btn-link" href="">
              Carbonization Analysis
            </a>
            <a className="btn btn-link" href="">
              Determination of Impurities
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Quick Links</h3>
            <a className="btn btn-link" href="">
              About Us
            </a>
            <a className="btn btn-link" href="">
              Contact Us
            </a>
            <a className="btn btn-link" href="">
              Our Services
            </a>
            <a className="btn btn-link" href="">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="">
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Newsletter</h3>
            <p>Subscribe to our Newsletter so you don't miss any news.</p>
            <div className="position-relative mx-auto max-w-[400px]">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              {year} &copy; <a href="#">Rovumo Laboratório</a>, Todos os
              direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
