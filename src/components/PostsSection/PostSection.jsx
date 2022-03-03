import React, { Component } from "react";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

import { FaRss } from "@react-icons/all-files/fa/FaRss";

import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { Link } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";

export default class PostSection extends Component {
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
                    <span class="text-main-1">Latest</span> Posts
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
                            Read More
                          </Link>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
            <div class="col-lg-4">
              <aside class="sidebar sidebar-right sidebar-sticky">
                <div class="widget">
                  <div class="widget-content">
                    <form
                      action="#"
                      class="form form-style-1"
                      novalidate="novalidate"
                    >
                      <Link to={`/SearchPost`}>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Type something..."
                          />
                          <button class="btn btn-color-main-1">
                            <span class="ion-search"></span>
                          </button>
                        </div>
                      </Link>
                    </form>
                  </div>
                </div>
                <div class="widget widget-highlighted">
                  <h4 class="widget-title">
                    <span>
                      <span class="text-main-1">We</span> Are Social
                    </span>
                  </h4>
                  <div class="widget-content">
                    <ul class="social-links-3 social-links-cols-4">
                      <li>
                        <a class="social-instagram" href="#">
                          <FaInstagram className="svgl" />
                        </a>
                      </li>

                      <li>
                        <a class="social-youtube" href="#">
                          <FaYoutube className="svgl" />
                        </a>
                      </li>
                      <li>
                        <a class="social-twitter" href="#" target="_blank">
                          <FaTwitter className="svgl" />
                        </a>
                      </li>

                      <li>
                        <a class="social-rss" href="#">
                          <FaRss className="svgl" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
