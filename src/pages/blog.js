import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import BlogIndex from "components/BlogIndex";
import Layout from "components/Layout";

export default ({
  data: {
    allMarkdownRemark: { edges: posts }, // Rename edges to posts
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog about Split</h1>
      <BlogIndex posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
