import React, { Component } from "react";

import { GatsbyImage } from "gatsby-plugin-image";
export default class BlogBackGround extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div class="testeo2">
          <GatsbyImage
            imgClassName="page-background-top"
            image={data.background.gatsbyImageData}
            loading="lazy"
          />
        </div>
      </>
    );
  }
}
