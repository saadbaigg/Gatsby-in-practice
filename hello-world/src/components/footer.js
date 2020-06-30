import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
    )
}

export default Footer
