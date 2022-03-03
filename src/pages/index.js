import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import PostSlider from "../components/Slider/PostSlider";

import CentralMenu from "../components/CentralBar/CentralMenu";

import PostSection from "../components/PostsSection/PostSection";
import TopBackGround from "../components/BackGrounds/TopBackGround";
import { Container } from "react-bootstrap";

import SEO from "../components/SEO";

const Index = ({ data }) => {
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
      <Container>
        <TopBackGround data={data.contentfulGeneralmedia} />
        {data.contentfulSiteInformation.menus
          .filter((item) => item === "Blogs")
          .map((t) => {
            return <PostSlider key="Blogs" data={data.allContentfulBlogs} />;
          })}
      </Container>

      {data.contentfulSiteInformation.menus
        .filter((item) => item === "Blogs")
        .map((t) => {
          return <PostSection key="Blogs" data={data.allContentfulBlogs} />;
        })}
    </Layout>
  );
};

export default Index;

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
