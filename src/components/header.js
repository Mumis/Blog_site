import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Wrapper } from "./headerStyle"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/profile.md/"}}) {
          edges {
            node {
              frontmatter {
                blog_name
                name
                description
                image
                github_link
              }
            }
          }
        }
      }      
    `}
    
    render={data => (
      <header>

        <Wrapper>

          <h1>
            <Link to="/">{data.allMarkdownRemark.edges[0].node.frontmatter.blog_name}</Link>
          </h1>

          <div>
            <img src={data.allMarkdownRemark.edges[0].node.frontmatter.image} alt="profile_image"></img>
            <span>
              <h3>
                <a href={data.allMarkdownRemark.edges[0].node.frontmatter.github_link} rel="noopener noreferrer" target="_blank">
                  {data.allMarkdownRemark.edges[0].node.frontmatter.name}
                </a>
                <span>'s personal blog.</span>
              </h3>
              <p>{data.allMarkdownRemark.edges[0].node.frontmatter.description}</p>
            </span>
          </div>

        </Wrapper>

        <br/>

      </header>
    )}

  />
);