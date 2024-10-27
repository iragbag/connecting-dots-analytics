import * as React from 'react'
//import { graphql, useStaticQuery } from 'gatsby'
import useSiteMetadata from '../query/useSiteMetadata'
const Seo = ({ title }) => { 
  const siteData = useSiteMetadata()
  return (
    <title>{title} | {siteData.title}</title>
  )
}

export default Seo