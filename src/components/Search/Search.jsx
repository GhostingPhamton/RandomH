import React from "react";
import { navigate } from "gatsby";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  connectHits,
  Pagination,
} from "react-instantsearch-dom";
//import {InfiniteHits, RefinementList} from 'react-instantsearch-dom'

import { GatsbyImage } from "gatsby-plugin-image";

import Container from "react-bootstrap/Container";

import { Row, Col } from "react-bootstrap";

import { Link, graphql } from "gatsby";

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

import { FaRss } from "@react-icons/all-files/fa/FaRss";

import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const searchClient = algoliasearch(
  "process.env.ALGOLIA_APP_ID",
  process.env.ALGOLIA_SEARCH_KEY
);

const PostHits = connectHits(({ hits }) => (
  <>
    <Container>
      <Row className="row vertical-gap">
        <Col lg="8">
          <div className="blog-list">
            {hits.map((hit) => {
              return (
                <div key={hit.objectID} class="blog-post">
                  <div class="row vertical-gap">
                    <div class="col-md-5 col-lg-6">
                      <Link
                        className="post-img"
                        to={`/${hit.slug}`}
                        onClick={() => navigate(`/${hit.slug}`)}
                      >
                        <GatsbyImage
                          className="search__entries__img"
                          image={hit.imagen.gatsbyImageData}
                          alt={hit.slug}
                          loading="lazy"
                        />
                      </Link>
                    </div>

                    <div class="col-md-7 col-lg-6">
                      <h2 class="post-title h4">
                        <Link to={`/${hit.slug}`}>{hit.title}</Link>
                      </h2>

                      <div class="post-text">
                        <p>{hit.descripcion.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>

        <div class="col-lg-4">
          <aside className="sidebar sidebar-right sidebar-sticky">
            <div class="widget">
              <div class="widget-content">
                <form
                  action="#"
                  class="form form-style-1"
                  novalidate="novalidate"
                >
                  <SearchBox translations={{ placeholder: "Search" }} />
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
  </>
));

export default function Search() {
  return (
    <div className="search__page__container">
      <InstantSearch
        indexName={process.env.ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <PostHits />
        <Pagination />
      </InstantSearch>
    </div>
  );
}
