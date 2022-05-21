import React from "react";
import styles from "./styles.module.scss";
import imagen1 from "../../assets/imagen1.jpg"
import imagen2 from "../../assets/imagen2.jpg"
import imagen3 from "../../assets/imagen3.jpg"
import imagen4 from "../../assets/imagen4.jpg"

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
            className={`${styles.carousel} mt-5`}
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
          </Carousel>
        </div >
      </div >
    </section >
  );
}
