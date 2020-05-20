import React, {Fragment} from 'react';
import Layout from '../components/Layouts';
import Footer from '../components/Footer';
import Post from '../components/Post';

import { graphql } from 'gatsby';


const Blog = ({ data }) => (
    <Fragment>
        <Layout>
            <h1>Blog</h1>
            {
                data.allMarkdownRemark.edges.map(post => {
                    const { title, author, date, description, path } = post.node.frontmatter;

                    return (
                        <Post
                            title={title}
                            author={author}
                            date={date}
                            description={description}
                            key={`${date}__${title}`}
                            path={path}
                        />
                    )
                })
            }
        </Layout>
        <Footer />
    </Fragment>
);

export default Blog;

export const AllBlogsQuery = graphql`
    query AllBlogsQuery {
        allMarkdownRemark {
            edges {
                node {
                 frontmatter {
                   date
                   title
                   description
                   author
                   path
                 }
               }
             }
        }
    }
`