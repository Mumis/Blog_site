import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
            {data.allMarkdownRemark.edges[0].node.frontmatter.blog_name}
          </h1>
          <div>
            <img src={data.allMarkdownRemark.edges[0].node.frontmatter.image}></img>
            <span>
              <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.name}</h2>
              <p>{data.allMarkdownRemark.edges[0].node.frontmatter.description}</p>
            </span>
          </div>
        </Wrapper>
      </header>
    )}

  />
)