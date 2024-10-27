import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import useSiteMetadata from '../query/useSiteMetadata'

const Layout = ({ pageTitle, children }) => {
    const siteData = useSiteMetadata()
    console.log(siteData)
  return (
    <div className={container}>
      <header className={siteTitle}>{siteData.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
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
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout