import React from "react";
import styles from "./styles.module.scss";
import imagen1 from "../../assets/imagen1.jpg"
import imagen2 from "../../assets/imagen2.jpg"
import imagen3 from "../../assets/imagen3.jpg"
import imagen4 from "../../assets/imagen4.jpg"
import imagen5 from "../../assets/imagen5.jpg"
import imagen6 from "../../assets/imagen6.jpg"
import imagen7 from "../../assets/imagen7.jpg"
import imagen8 from "../../assets/imagen8.jpg"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselApp() {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            className={`${styles.carousel} mt-3`}
          >
            <div>
              <img src={imagen1} alt="poke" />
            </div>
            <div>
              <img src={imagen2} alt="poke1" />
            </div>
            <div>
              <img src={imagen3} alt="poke2" />
            </div>
            <div>
              <img src={imagen4} alt="poke3" />
            </div>
            <div>
              <img src={imagen5} alt="poke4" />
            </div>
            <div>
              <img src={imagen6} alt="poke5" />
            </div>
            <div>
              <img src={imagen7} alt="poke6" />
            </div>
            <div>
              <img src={imagen8} alt="poke7" />
            </div>
          </Carousel>
        </div >
      </div >
    </section >
  );
}
