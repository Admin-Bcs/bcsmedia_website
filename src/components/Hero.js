import React, { Component } from "react";
import HomeAnimated from "../assets/image/bcs-media/animations/home/home";
import { Link } from "react-router-dom";
export class Hero extends Component {
  render() {
    return (
      <div className="hero-area home-3-hero-bg ovr-h">
        <div className="container">
          <div className="row aic">
            <div
              className="col-lg-6 col-md-12 wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="home-3-hero-title">
                <h1
                  className="wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1s"
                >
                  <strong className="font-primary color-primary">Haz realidad tus ideas</strong>

                </h1>
                {/* <p className="wow fadeInUp" data-wow-delay="0.3s">
                  Tus Ideas
                </p> */}
                <div
                  className="subscribe-form home-3-subscribe-form wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="1s"
                >

                  {/* <input
                      type="email"
                      placeholder="Correo Electronico"
                      id="mc-email"
                      className="mr-md-3"
                    /> */}
                  <Link to="/contact" as="/contact">
                    <button>Contáctanos</button>
                  </Link>

                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-delay="0.5s"
              data-wow-duration="1s"
            >
              <div className="home-3-hore-img">
                <HomeAnimated />
                {/* <img src={homeAnimated} alt="" /> */}
                {/* <img src="/assets/image/home-3-hero-img.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
