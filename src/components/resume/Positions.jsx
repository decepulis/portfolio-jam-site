import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview from "../PostPreview"

export default function Positions({ id }) {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/(positions)/" }
            frontmatter: { featuredpost: { eq: true } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                date(formatString: "MMMM YYYY")
                description
              }
            }
          }
        }
        totalCount: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(positions)/" } }
        ) {
          totalCount
        }
      }
    `
  )

  return (
    <section id={id}>
      <header>
        <h2>Positions</h2>
      </header>
      {data.articles.edges.map(({ node }) => (
        <PostPreview
          key={node.id}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.subtitle}
          date={node.frontmatter.date}
          description={node.frontmatter.description}
          slug={node.fields.slug}
        />
      ))}
      <p>
        <Link to="/positions/">
          View All {data.totalCount.totalCount} Entries &rarr;
        </Link>
      </p>
    </section>
  )
}
