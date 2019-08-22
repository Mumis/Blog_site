import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Wrapper }from "./blog-postStyle"


function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <SEO title={title}/>
            <Wrapper>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Wrapper>
        </Layout>
    )
}

export default BlogPost;

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(
            fields: { slug: { eq: $slug } }
        ) {
        html
        frontmatter {
            title
        }
    }
}`