import React from "react";

import Container from "react-bootstrap/Container";

import Blog from "../../images/blog_icon.png";

import Games from "../../images/gameslogo.png";

import Review from "../../images/review.png";

import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

import { Link } from "gatsby";

const CentralMenu = () => {
  return (
    <>
      <Container>
        <Row className="row vertical-gap">
          <Col lg="4">
            <div class="central-feature-1">
              <div class="central-feature-icon">
                <img src={Blog} alt="Blog" />
              </div>
              <div class="central-feature-cont">
                <h3 class="central-feature-title">
                  <Link to={`/BlogList/`}>Blog</Link>
                </h3>
                <h4 class="central-feature-titleb text-main-1">
                  <Link to={`/BlogList/`}>Ver más</Link>
                </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div class="central-feature-1">
              <div class="central-feature-icon">
                <img src={Games} alt="Games" />
              </div>
              <div class="central-feature-cont">
                <h3 class="central-feature-title">
                  <Link to={`/JuegosList/`}>Juegos</Link>
                </h3>
                <h4 class="central-feature-titleb text-main-1">
                  <Link to={`/JuegosList/`}>Ver Más</Link>
                </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div class="central-feature-1">
              <div class="central-feature-icon">
                <img src={Review} alt="Review" />
              </div>
              <div class="central-feature-cont">
                <h3 class="central-feature-title">
                  <Link to={`/ReviewList/`}>Reseñas</Link>
                </h3>
                <h4 class="central-feature-titleb text-main-1">
                  <Link to={`/ReviewList/`}>Ver Más</Link>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CentralMenu;
