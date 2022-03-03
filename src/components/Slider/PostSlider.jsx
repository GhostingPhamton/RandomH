import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby";

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  lazyLoad: "progressive",
};

export default class PostSlider extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <div class="gap-2"></div>

        <Container>
          <div class="image-slider">
            <Slider {...settings}>
              {data.edges.map((item, index) => {
                return (
                  <div key={index} className="slick-slide">
                    <img
                      className="slick-slide-image"
                      src={item.node.imagen.file.url}
                      alt={item.node.slug}
                    />

                    <label className="slick-slide-label">
                      <Link
                        className="slick-slide-label"
                        to={`/${item.node.slug}`}
                      >
                        {item.node.title}
                      </Link>
                    </label>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>

        <div class="gap-2"></div>
      </>
    );
  }
}
