import React, { Component, Fragment } from "react";
import img1 from "../assets/image/bcs-media/history.svg";
import img2 from "../assets/image/bcs-media/img-aboutus.svg";
import img3 from "../assets/image/bcs-media/values.svg";
import img4 from "../assets/image/bcs-media/what.svg";

export default class Homesection extends Component {
  render() {
    return (
      <div className="service-tab section-padding relative">
        <br></br>
        <div className="area-bg" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="section-title wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <h2 className="txt-title">
                  <strong>
                    Llegue al público de una manera
                  precisa y eficaz.</strong>
                </h2>
                <br></br>
                <p>
                  Trabajamos en consegir el alcance e impacto entre tu mensaje
                  y los grupos objetivos, identificando los puntos estratégicos
                  de mayor influencia para generar un mayor impacto,
                  asegurándonos que tu anuncio llegue al público de una manera
                  precisa y eficaz.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className=" tab-section tab-color">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li
                    className="nav-item wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <a
                      className="nav-link active-1"
                      id="home-tab"
                      data-toggle="tab"
                      href="#tab-section-1"
                      role="tab"
                      aria-controls="home"
                      aria-selected={true}
                    >
                      Quiénes somos
                    </a>
                  </li>
                  <li
                    className="nav-item wow fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="1s"
                  >
                    {/* <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#tab-section-2"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Historia LKJLJLKJLK
                    </a> */}
                  </li>
                  <li
                    className="nav-item wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#tab-section-3"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      ¿Qué hacemos?
                    </a>
                  </li>
                  <li
                    className="nav-item wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  >
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#tab-section-4"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      ¿Cómo lo hacemos?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-sm-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-section-1"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="tab-content">
                    <img
                      src={img2}
                      className="wow fadeInDown"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    />
                  </div>
                  <div
                    className="tab-text wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  >
                    <p>
                      Somos una agencia de medios no tradicionales que brinda la
                      oportunidad a nuestros clientes de tener un espacio
                      innovador en donde puedan publicitaria, a la misma vez
                      estableciendo una relación con diferentes marcas las
                      cuales le dan un valor agregado a su publicidad. .{" "}
                    </p>
                    <a href="#" className="read-more-btn">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-section-2"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="tab-content">
                    <img
                      src={img1}
                      className="wow fadeInDown"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    />
                  </div>
                  {/* <div
                    className="tab-text wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  >
                    <p>
                      bcs-media nace dentro de la innovación de Batres Creative
                      Solutions en la Ciudad de Nueva York. Desde 1996 fuimos
                      evolucionando con los servicios que ofreciamos a nuestros
                      clientes, comenzando en ser una agencia de diseño gráfico
                      hasta llegar a ofrecer impresión, desarrollo de sitios web
                      y aplicaciones móviles. En el 2006 decidimos darle un
                      nuevo valor agregado por lo cual se creó bcs-media siendo
                      una agencia de medios publicitarios para que nuestros
                      clientes puedan dar a conocer sus servicios teniendo una
                      diversidad de opciones para poder pautarse..{" "}
                    </p>
                    <a href="#" className="read-more-btn">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </div> */}
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-section-3"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="tab-content">
                    <img
                      src={img3}
                      className="wow fadeInDown"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    />
                  </div>
                  <div
                    className="tab-text wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  >
                    <p>
                      ¿Qué hacemos? En bcs-media hacemos que su inversión tenga
                      la mayor eficiencia y rentabilidad dando un medio digital
                      en el cual puedas pautarte y posicionar tu marca o
                      producto hacia los consumidores, hacemos que todos los
                      esfuerzos dedicados en tus estrategias publicitarias
                      puedan cumplir sus objetivos. ¿Cómo lo hacemos? Trabajamos
                      en conseguir su alcance e impacto entre tu mensaje y los
                      grupos objetivos, identificando los puntos estratégicos de
                      mayor influencia para generar un mayor impacto,
                      asegurándonos que tu anuncio llegue al público de una
                      manera precisa y eficaz. .{"  "}
                    </p>



                    <a href="#" className="read-more-btn">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-section-4"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="tab-content">
                    <img
                      src={img4}
                      className="wow fadeInDown"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    />
                  </div>
                  <div
                    className="tab-text wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  >
                    <p>
                      <p>
                        "Creatividad, calidad y pasión" en cada proyecto han sido
                        algunos de los valores con los que definimos nuestros años
                        de trayectoria.
                    </p>
                      <p>
                        <b>Creatividad:</b> El proceso de tener ideas originales
                      que aporten valor es lo que nos caracteriza, resolviendo
                      problemas de una manera original.
                    </p>
                      <p>
                        Calidad: Lo que buscamos en cada uno de nuestros proyectos
                        es exceder las expectativas del cliente siendo muy
                        exigentes con nosotros mismos, incorporando los más altos
                        estándares a cada proyecto.
                    </p>
                      <p>
                        Pasión: Es el pilar de nuestra compañía y el motor de
                        nuestro éxito, con nuestro entusiasmo y pasión lograremos
                      resultados extraordinarios en su empresa..{" "}
                      </p>
                    </p>
                    <a href="#" className="read-more-btn">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-section-5"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="tab-content">
                    <img
                      src="assets/image/tab-img.png"
                      className="wow fadeInDown"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    />
                  </div>
                  <div
                    className="tab-text wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  ></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-section-6"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="tab-content">
                    <img
                      src="assets/image/tab-img.png"
                      className="wow fadeInDown"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    />
                  </div>
                  <div
                    className="tab-text wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
