import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    bannerContainer,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({pageTitle, children}) => {
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
        <div className = {container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className = {siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}
                        ><Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <StaticImage className = {bannerContainer}
                src = "../images/banner.jpg"
                alt = "a lovely plant banner, believe me"
            />
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            <footer>
                <a href = "https://github.com/jamiexhou/prickle-my-fancy">View me on Github!</a>
            </footer>
        </div>
    )
}

export default Layout