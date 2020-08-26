import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Carousel from "./index";

export const knobsCarousel = () => (
  <div>
    <Carousel autoplay delay={1000} height={300}>
      <div style={{ height: "100%", width: "100%", background: "red" }}>1</div>
      <div style={{ height: "100%", width: "100%", background: "blue" }}>2</div>
      <div style={{ height: "100%", width: "100%", background: "yellow" }}>
        3
      </div>
      <div style={{ height: "100%", width: "100%" }}>4</div>
    </Carousel>
  </div>
);
