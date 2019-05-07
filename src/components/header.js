import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "assets/profile.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <Img fixed={data.file.childImageSharp.fixed} />
        Emil Wertwein
      </header>
    )}
  />
)

export default Header
