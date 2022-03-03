import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

import { Link } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";

export default class Juegos extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <div class="gap-2"></div>
        <div class="gap-2"></div>
        <Container>
          <Row className="row vertical-gap">
            <Col lg="8">
              <div class="blog-grid">
                <h3 class="decorated-h-2">
                  <span>
                    <span class="text-main-1"></span> Reseñas
                  </span>
                </h3>
              </div>
              <div class="gap"></div>
              <div class="blog-grid">
                <Row>
                  {data.edges.map((item, index) => {
                    return (
                      <Col key={index} md="6">
                        <div class="blog-post">
                          <Link className="post-img" to={`/${item.node.slug}`}>
                            <GatsbyImage
                              image={item.node.imagen.gatsbyImageData}
                              alt={item.node.slug}
                              loading="lazy"
                            />
                          </Link>

                          <div class="gap"></div>
                          <h2 class="post-title h4">
                            <Link to={`/${item.node.slug}`}>
                              {item.node.title}{" "}
                            </Link>
                          </h2>

                          <div class="post-text">
                            <p>{item.node.descripcion.descripcion}</p>
                          </div>
                          <div class="gap"></div>

                          <Link
                            className="btn btn-rounded btn-color-dark-3 btn-hover-color-main-1"
                            to={`/${item.node.slug}`}
                          >
                            Leer Más
                          </Link>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
