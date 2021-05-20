import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logoBcsmedia from "../assets/image/bcs-media/logo_bcsmedia_white.png";
import topfooter from "../assets/image/bcs-media/footer-top.svg";
import emailjs from 'emailjs-com';

export class Footer extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_kzkku1q', 'template_t7bid0k', e.target, 'user_5bDIgYddipK9ipPSncbgw')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    return (
      <Fragment>
        <div>
          <img src={topfooter} />
        </div>

        <div className="footer-area white home-3-footer-area">
          <div className="pd-sm section-padding">
            <div className="container">
              <div className="row justify-content-center">
                {/* <div className="footer-logo">
                  <a href="index.html">
                    <img src={logoBcsmedia} alt="" width="120" />
                  </a>
                </div> */}
                <div className="col-lg-7 text-center">
                  <div className="section-title">
                    <div className="home-3-hero-title footer-text">
                      <h2
                        className="wow fadeInUp"
                        data-wow-delay="0.5s"
                        data-wow-duration="1s"
                      >
                        ¿Tiene preguntas en mente? <strong>contáctanos</strong>
                      </h2>
                    </div>
                    <div
                      className="subscribe-form footer-subscribe-form wow fadeInUp"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      {/* <form id="mc-form-footer">
                        <input
                          className="mr-md-3"
                          name="email"
                          placeholder="Correo Electronico"
                          id="email"
                        />
                        <button type="submit" onSubmit={sendEmail} className="btn-footer">ENVIAR</button>
                      </form> */}
                      <Link to="/contact" as="/contact">
                        <button>Contáctanos</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-menu">
            <div className="container">
              <div className="row justify-content-center">
                {/* <div className="col-lg-9">
                  <div className="footer-mainmenu">
                    <ul>

                      <li>
                        <a href="home">Home</a>
                      </li>
                      <li>
                        <a href="about">About</a>
                      </li>
                      <li>
                        <a href="services">Services</a>
                      </li>
                      {/* <li>
                        <a href="#">Customers</a>
                      </li>

                      <li>
                        <a href="clientes">Clients</a>
                      </li>
                      <li>
                        <a href="contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <br />
                  
                </div> */}
                <div>
                  <p>
                    Copyright 2021 <a
                    >Bcs-Media</a>. All
										Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  Copyright &copy; 2021 Bcs Media .
                </div>
                <div className="col-lg-6">
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Fragment>
    );
  }
}

export default Footer;
