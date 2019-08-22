import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Wrapper } from "./footerStyle"


export default () => (
  <StaticQuery
    query={graphql`
        query {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/profile.md/"}}) {
            edges {
              node {
                frontmatter {
                  github_link
                  twitter_link
                  portfolio_link
                  emoji
                }
              }
            }
          }
        }      
    `}   

    render={data => (
      <footer>
        <Wrapper>
          <a href={data.allMarkdownRemark.edges[0].node.frontmatter.github_link} rel="noopener noreferrer" target="_blank">
            Github 
          </a>
          {data.allMarkdownRemark.edges[0].node.frontmatter.emoji}
          <a href={data.allMarkdownRemark.edges[0].node.frontmatter.portfolio_link} rel="noopener noreferrer" target="_blank">
            Portfolio 
          </a>
          {data.allMarkdownRemark.edges[0].node.frontmatter.emoji}
          <a href={data.allMarkdownRemark.edges[0].node.frontmatter.twitter_link} rel="noopener noreferrer" target="_blank">
             Twitter 
          </a>
          <p>Made by Emil Wertwein</p>
        </Wrapper>
      </footer>
    )}

  />
);