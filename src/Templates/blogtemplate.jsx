import React from "react";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import { graphql } from "gatsby";

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

import { FaRss } from "@react-icons/all-files/fa/FaRss";

import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

import Layout from "../components/Layout";

import { Component } from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import BlogBackGround from "../components/BackGrounds/BlogBackGround";

import { Link } from "gatsby";

import SEO from "../components/SEO";

export default class BlogTemplate extends Component {
  render() {
    const data = this.props.data.contentfulBlogs;
    const disqusShortname = "https-lavirgocuevadelhikikomori-ga-1";

    const disqusConfig = {
      identifier: data.id,
      title: data.title,
    };
    const siteurl =
      this.props.data.contentfulSiteInformation.siteUrl + "/" + data.slug;
    return (
      <>
        <Layout>
          <SEO
            title={data.title}
            descripcion={data.descripcion.descripcion}
            image={data.imagen.file.url}
            keywords={[
              `RandomHGamer`,

              `Manga`,
              `VideoJuegos`,

              `Anime`,

              `Otaku`,
              `Eroge`,
              `${data.title}`,
            ]}
          />
          <BlogBackGround data={this.props.data.contentfulGeneralmedia} />
          <div class="gap-2"></div>
          <div class="gap-2"></div>

          <Container>
            <ul class="breadcrumbs">
              <li>
                <span>{data.title}</span>
              </li>
            </ul>
          </Container>

          <div class="gap-1"></div>

          <Container>
            <Row className="row vertical-gap">
              <div class="col-lg-8">
                <div class="blog-post blog-post-single">
                  <div class="post-text mt-0">
                    <div class="post-img">
                      <GatsbyImage
                        image={data.imagen.gatsbyImageData}
                        alt={data.slug}
                      />
                    </div>
                    <div class="gap-1"></div>
                    <h1 class="post-title h4">{data.title}</h1>

                    <div class="gap"></div>
                    <div
                      class="centerpost"
                      dangerouslySetInnerHTML={{
                        __html: data.contenido.childMarkdownRemark.html,
                      }}
                    ></div>

                    <div class="gap"></div>

                    <div class="gap"></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <aside class="sidebar sidebar-right sidebar-sticky">
                  <Link to={`/SearchPost/`}>
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
      </>
    );
  }
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      contenido {
        childMarkdownRemark {
          html
        }
      }

      imagen {
        gatsbyImageData(width: 740)
        file {
          url
        }
      }
      descripcion {
        descripcion
        childMarkdownRemark {
          html
        }
      }
    }

    contentfulGeneralmedia {
      background {
        gatsbyImageData
      }
    }

    contentfulSiteInformation {
      siteUrl
      menus
      siteName

      siteDescription
    }
  }
`;
