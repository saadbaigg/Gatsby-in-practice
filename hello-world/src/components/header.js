import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.css'

function Header() {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={headerStyles.header} > 
            <h1>
                <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
            </h1>
            <ul className={headerStyles.navList} >
                <li>
                    <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activenavItem} 
                        to="/">
                        Home
                    </Link>
                </li>
                
                <li>
                    <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activenavItem} 
                        to={/blog/}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activenavItem} 
                        to={/about/}>
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activenavItem} 
                        to={/contact/}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
