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
              }
            }
          }
       }
      }      
    `
    }
    
    render={data => (
      <header>

        <Wrapper>

          <h1>
            <Link to="/">{data.allMarkdownRemark.edges[0].node.frontmatter.blog_name}</Link>
          </h1>

          <div>
            <img src={data.allMarkdownRemark.edges[0].node.frontmatter.image}></img>
            <span>
              <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.name}<span>'s personal blog.</span></h3>
              <p>{data.allMarkdownRemark.edges[0].node.frontmatter.description}</p>
            </span>
          </div>

        </Wrapper>

        <br/>

      </header>
    )}

  />
)