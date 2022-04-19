import * as React from 'react'
import { useState } from 'react'
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
import * as styles from '../components/EmailListForm.module.css';
import { StaticImage } from 'gatsby-plugin-image'
import addToMailchimp from 'gatsby-plugin-mailchimp'

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

    // constants for email signups
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        addToMailchimp(email)
          .then((data) => {
            alert(data.result);
          })
          .catch((error) => {
            // Errors in here are client side
            // Mailchimp always returns a 200
          });
      };

    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    };

    

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

            
            <form onSubmit={handleSubmit} className={styles.EmailListForm}>
            <h2>Subscribe to my email list!</h2>
            <p>I will be putting out monthly summaries about the new features, new articles, and even plants for local trade in the future!</p>
            <p>If these emails are not showing up, your email may have marked it as spam. I promise it is not!</p>
            <div className={styles.Wrapper}>
                <input
                placeholder="Email address"
                name="email"
                type="text"
                onChange={handleEmailChange}
                />
                <button type="submit">Subscribe</button>
            </div>
            </form>

            <footer>
                <a href = "https://github.com/jamiexhou/prickle-my-fancy">View me on Github!</a>
            </footer>
        </div>
    )
}

export default Layout