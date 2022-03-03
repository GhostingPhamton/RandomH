import React, { Component } from "react";

import Layout from "../components/Layout";

import Container from "react-bootstrap/Container";

import { Row, Col } from "react-bootstrap";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

import { FaRss } from "@react-icons/all-files/fa/FaRss";

import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import SEO from "../components/SEO";

import TopBackGround from "../components/BackGrounds/TopBackGround";

const BlogList = ({ data, pageContext }) => {
  const { numPages, pageNumber } = pageContext;
  return (
    <Layout className="virgomain">
      <SEO
        title={data.contentfulSiteInformation.siteName}
        keywords={[
          `RandomHGamer`,

          `Manga`,
          `VideoJuegos`,

          `Anime`,

          `Otaku`,
          `Eroge`,
        ]}
      />
      <TopBackGround data={data.contentfulGeneralmedia} />
      <div class="gap-1"></div>
      <div class="gap-1"></div>
      <div class="gap-1"></div>
      <Container>
        <ul class="breadcrumbs">
          <li>
            <span>Blog List</span>
          </li>
        </ul>
      </Container>
      <div class="gap-1"></div>

      <Container>
        <Row className="row vertical-gap">
          <Col lg="8">
            <div className="blog-list">
              {data.allContentfulBlogs.edges.map((item, index) => {
                return (
                  <div key={index} class="blog-post">
                    <div class="row vertical-gap">
                      <div class="col-md-5 col-lg-6">
                        <Link className="post-img" to={`/${item.node.slug}`}>
                          <GatsbyImage
                            image={item.node.imagen.gatsbyImageData}
                            alt={item.node.slug}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <div class="col-md-7 col-lg-6">
                        <h2 class="post-title h4">
                          <Link
                            href="blog-article.html"
                            to={`/${item.node.slug}`}
                          >
                            {item.node.title}
                          </Link>
                        </h2>

                        <div class="post-text">
                          <p>{item.node.descripcion.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div class="pagination pagination-center">
                {pageContext && pageContext.hasPrevious && (
                  <Link to={pageContext.previousPageLink}>Anterior</Link>
                )}

                <nav>
                  {Array.from({ length: numPages }, (_, i) => (
                    <Link
                      key={`pagination-number${i + 1}`}
                      to={i === 0 ? "/BlogList/" : `/BlogList/${i + 1}`}
                      className={
                        i + 1 === pageNumber ? "pagination-current" : ""
                      }
                    >
                      {i + 1}
                    </Link>
                  ))}
                </nav>
                <div>
                  {pageContext && pageContext.hasNextPage && (
                    <Link
                      ClassName=" pagination-next"
                      to={pageContext.nextPageLink}
                    >
                      Siguiente
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Col>

          <div class="col-lg-4">
            <aside class="sidebar sidebar-right sidebar-sticky">
              <Link to={`/SearchPost`}>
                <div class="widget">
                  <div class="widget-content">
                    <form
                      action="#"
                      class="form form-style-1"
                      novalidate="novalidate"
                    >
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
                    </form>
                  </div>
                </div>
              </Link>
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
                      <a class="social-facebook" href="#">
                        <FaFacebook className="svgl" />
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
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query PostListingQuery($skip: Int, $limit: Int) {
    allContentfulBlogs(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          imagen {
            gatsbyImageData(width: 360)
            file {
              url
            }
          }
          descripcion {
            descripcion
          }

          createdAt
        }
      }
    }

    contentfulGeneralmedia {
      background {
        gatsbyImageData
      }
    }

    contentfulSiteInformation {
      menus
      siteName
      siteUrl
      siteDescription
    }
  }
`;
