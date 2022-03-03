import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import SEO from "../components/SEO";

import Search from "../components/Search/Search";

import { appId, indexName, searchKey } from "../utils/algoliadata";
import TopBackGround from "../components/BackGrounds/TopBackGround";
import Container from "react-bootstrap/Container";

const SearchPost = ({ data }) => {
  return (
    <Layout className="virgomain" data={data}>
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
            <span>Search</span>
          </li>
        </ul>
      </Container>
      <div class="gap-1"></div>

      <Search indexName={indexName} />
    </Layout>
  );
};

export default SearchPost;

export const pageQuery = graphql`
  query {
    allContentfulBlogs(limit: 8) {
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